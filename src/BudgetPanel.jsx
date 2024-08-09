import React, {useState} from 'react'
import "./BudgetPanel.css"

function BudgetPanel( {setBudgetPanelIsOpen, budgetPanelIsOpen, setMaxBudget, setMinBudget} ){

    let MaxBudget
    let MinBudget

    function handleMaxBudgetChange(event){
        setMaxBudget(Number(event.target.value))
    }

    function handleMinBudgetChange(event){
        setMinBudget(Number(event.target.value))
    }

    function toggleBudgetPanel(){
        budgetPanelIsOpen ? setBudgetPanelIsOpen(false) : setBudgetPanelIsOpen(true)
    }
    
    return(
        <div className={`budget-panel ${budgetPanelIsOpen ? "panel budget-open": "panel"}`}>
            <img className="close-icon" src="/src/assets/close.png" height={25} onClick={toggleBudgetPanel}></img>
            <form>
                
                <div className='min-budget-label'>Minimum Budget</div>
                <input type="number" placeholder="The least $$$" onChange={handleMinBudgetChange} value={MinBudget}/>

                <br></br>
                
                <div className='max-budget-label'>Max Budget</div>
                <input type="number" placeholder="The most $$$" onChange={handleMaxBudgetChange} value={MaxBudget}/>
            </form>

        </div>
    );
}

export default BudgetPanel