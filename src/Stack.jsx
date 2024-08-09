import React from 'react' 
import Card from './Card';
import "./Stack.css"
import DropArea from './DropArea';
import "./MainPanel.css"

function Stack( {activityRanksIsOpen, setActivityRanksIsOpen, list, setActiveCard, onDrop} ){

    function togglePanel(){
        activityRanksIsOpen ? setActivityRanksIsOpen(false) : setActivityRanksIsOpen(true)
    }
    
    return (
        <div className={`stack-column ${activityRanksIsOpen ? 'activities-open panel' : 'panel'}`}>
            <img className="close-icon" src="/src/assets/close.png" height={25} onClick={togglePanel}></img>
            <p className='top-preferred stack-instruction'>Most Preferred</p>
            <DropArea onDrop={() => onDrop(0)}/>
            {list.map(
                (activity, index) =>
                    <React.Fragment key={index}>
                        <Card 
                            activityRanksIsOpen = {activityRanksIsOpen}
                            key={index} 
                            index={index} 
                            val={activity} 
                            setActiveCard={setActiveCard} 
                        />
                        <DropArea onDrop={() => onDrop(index + 1)}/>
                    </React.Fragment>
            )}
            <p className='bot-preferred stack-instruction'>Least Preferred</p>
        </div>
      );
}

export default Stack
