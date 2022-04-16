# Pill popper

Pill popper is a single-page applaction, build with React, JS, HTML, CSS3, SASS, AJAX, WebSocket, Socket.IO, Twilio, Pusher.
Server: Node, Express.
DB: PostgreSQL.

Users can:
1. Schedule time for taking medicine for family members.
2. Read descriptions, warnings or instructions etc. from FDA API.
3. Get notifications when the time is comming.
4. Find the nearest pharmacies on the map.

## Final Product

!["main_page_1"](https://github.com/andrewbidylo/pill-popper/blob/main/docs/main_page_1.png?raw=true)

!["main_page_2"](https://github.com/andrewbidylo/pill-popper/blob/main/docs/main_page_2.png?raw=true)

!["main_page_3"](https://github.com/andrewbidylo/pill-popper/blob/main/docs/main_page_3.png?raw=true)

!["main_page_4"](https://github.com/andrewbidylo/pill-popper/blob/main/docs/main_page_4.png?raw=true)

### Wireframe
https://www.figma.com/file/gxnJZxnfgyEOFxXr1c3V3v/Pill-popper?node-id=2%3A23

### ERD
https://app.diagrams.net/#G11XnTpn527XG-SrhhKbyg9ziJlCg-m373

## Dependencies

Front-end:

- Axios 0.26.1,
- Classnames 2.3.1,
- Pusher-js 7.0.6,
- React 17.0.2,
- React-dom 17.0.2,
- React-time-picker 4.5.0,
- React-toastify 8.2.0,
- Sass 1.49.9,
- Scss 0.2.4,
- Socket.io-client 4.4.1,
- Web-vitals 2.1.4,

Back-end:

- axios 0.26.1,
- cors 2.8.5,
- dotenv 16.0.0,
- express 4.17.3,
- fs,
- node-cron 3.0.0,
- pg 8.7.3,
- pusher 5.0.1,
- sass 1.49.9,
- socket.io 4.4.1,
- twilio 3.76.0.

## Getting Started

- Clone the project
- Install all dependencies (Client and Server) (using the `npm install` command).
- Create local a DB.
- Create schema - run files inside back-end/db/schema.
- Populate the DB - un files inside back-end/db/seeds.
- Start the client using the `npm run` command in the front-end folder. The app will be served at <http://localhost:3000/>.
- Start the server using the `npm run` command in the back-end folder. The app will be served at <http://localhost:8081/>.