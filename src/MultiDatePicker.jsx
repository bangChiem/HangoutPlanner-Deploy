import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import closeIcon from "./assets/close.png"

function MultiDatePicker( {setDatePanelIsOpen, datePanelIsOpen, setSelectedDates, selectedDates} ){
  
    const handleDayClick = (day) => {
      const isSelected = selectedDates.some(selectedDay => selectedDay.getTime() === day.getTime());
  
      if (isSelected) {
        setSelectedDates(selectedDates.filter(selectedDay => selectedDay.getTime() !== day.getTime()));
      } else {
        setSelectedDates([...selectedDates, day]);
      }
    }

  function toggleDatePanel(){
    datePanelIsOpen ? setDatePanelIsOpen(false) : setDatePanelIsOpen(true)
  }

  return (
    <div className={`${datePanelIsOpen ? 'panel calendar-open' : 'panel'}`}>
      <img className="close-icon" src={closeIcon} height={25} onClick={toggleDatePanel}></img>
      <div className='calendar-panel-container '>
        <DayPicker
          mode="multiple"
          selected={selectedDates}
          onDayClick={handleDayClick}
        />
      </div>
    </div>
  );
};

export default MultiDatePicker;

// Helper function to compare dates without time
Date.prototype.isSameDay = function (other) {
  return (
    this.getFullYear() === other.getFullYear() &&
    this.getMonth() === other.getMonth() &&
    this.getDate() === other.getDate()
  );
};
