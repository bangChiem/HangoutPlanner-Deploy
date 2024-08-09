import './Card.css'
import './MainPanel.css'

function Card( {index, val, setActiveCard} ){

    function setColor(index){
        if(index == 0){
            return 'one'
        }
        if(index == 1){
            return 'two'
        }
        if(index == 2){
            return 'three'
        }
        if(index == 3){
            return 'four'
        }
        if(index == 4){
            return 'five'
        }
        if(index == 5){
            return 'six'
        }
        if(index == 6){
            return 'seven'
        }
        if(index == 7){
            return 'eight'
        }
    }

    return(
        <article
            draggable="true" 
            onDragStart={() => setActiveCard(index)} 
            onDragEnd={() => setActiveCard()}
        >
                <img src='src/assets/drag.png' width={40}></img>
                <p className={`activity ${setColor(index)}`} >{val}</p>
        </article>
    )



}

export default Card