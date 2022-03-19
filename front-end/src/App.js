import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import './App.scss';

function App(props) {
  
  return (
    <main className="layout">
      <nav>
        < FontAwesomeIcon icon={ faUsers } className="nav-icon" />
        <div>This is the app</div>
        < FontAwesomeIcon icon={ faCalendarDays } className="nav-icon"/>
      </nav>
      <section>
        {/* components here */}
      </section>
      <footer>
        <button>Add Medication</button>
      </footer>
    </main>
  );
}

export default App;
