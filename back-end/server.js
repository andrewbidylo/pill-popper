require('dotenv').config();
const cron = require('node-cron');
//comment
const Pusher = require("pusher");

const Express = require('express');
const cors = require('cors');
const app = Express();
const BodyParser = require('body-parser');
const sassMiddleware = require("./lib/sass-middlewear");
const PORT = process.env.PORT || 8081;

const { Pool, Query } = require("pg");
const dbParams = require("./lib/db");
const db = new Pool(dbParams);
db.connect();

const childrenRoutes = require('./routes/children');
const medRoutes = require('./routes/medications');
const userRoutes = require('./routes/users');
const { application } = require('express');

app.use(cors())

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

//app.use(express.static("public"));


// Express Configuration
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(Express.static('public'));

// data base routes
app.use('/users/', childrenRoutes(db));
app.use('/medications/', medRoutes(db));
app.use('/users/', userRoutes(db));

app.listen(PORT, "0.0.0.0", () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});



const pusher = new Pusher({
  appId: "1366969",
  key: "e5acfbcf6043307a71dc",
  secret: "e291731caee542ae8d27",
  cluster: "us3",
  useTLS: true
});

cron.schedule('* * * * *', () => {
  const times = db.query(
      `SELECT children.name AS child_name, children.id AS child_id,
      childrens_medications.*,
      times.time AS time 
      FROM childrens_medications
      JOIN Children
      ON children.id = child_id
      JOIN users
      ON users.id = user_id
      JOIN times
      ON childrens_medications.id = childrens_medications_id
      ORDER BY time;`
    )
  times.then((response) => {
    
    const children = response.rows
    const day = new Date()
    const startTime = day.getHours() + ":" + day.getMinutes();
    let i = 0
    
    for (let child of children) {
      if (child.time == startTime && i === 0) {
        i++
        pusher.trigger("my-channel", "my-event", {
          message: `${child.child_name}, please take ${child.name}`
        });
      }
    }
  })
    .catch(err => console.log('There has been an ERROR: ', err));
})

