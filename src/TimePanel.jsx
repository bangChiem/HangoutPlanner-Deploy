import Select from 'react-select';
import "./TimePanel.css"

const options = [
    { value: 'morning', label: 'Morning' },
    { value: 'afternoon', label: 'Afternoon' },
    { value: 'evening', label: 'Evening' },
    { value: 'noon', label: 'Noon' },
  ];

function TimePanel( {timePanelIsOpen, toggleTimePanel, setDuration, setTime, time} ){

    const handleChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setTime(selectedValues);
      };
    
      // Convert time (array of strings) back to objects for the Select component
      const selectedOptions = options.filter(option => time.includes(option.value));


    function handleDurationChange(event){
        setDuration(Number(event.target.value));
    }

    return(
        <div className={`${timePanelIsOpen ? 'panel time-open' : 'panel'}`}>
            <img className="close-icon" src="/src/assets/close.png" height={25} onClick={toggleTimePanel}></img>

            <div className='time-label'>How Long?</div>
            <form>
                <input type="number" placeholder="Enter time" onChange={handleDurationChange}></input>Hours
            </form>

            <div className='time-select-label-container'>
                <span className='time-select-left-label'>What</span>
                <span className='time-select-right-label'>Time</span>
            </div>
            <div className='time-select-container'>
                <Select
                    isMulti
                    value={selectedOptions}
                    onChange={handleChange}
                    options={options}
                />
            </div>
        </div>  
    )
}

export default TimePanel