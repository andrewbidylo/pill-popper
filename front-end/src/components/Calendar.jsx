import CalendarComponent from 'react-calendar'
import './Calendar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const Calendar = ({ value, onChange, transition }) => {

  return (
    <>
      <CalendarComponent onChange={onChange} value={value} calendarType='US' />
      <button className='close-component' onClick={() => transition('NONE')} >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </>
  )

}

export default Calendar