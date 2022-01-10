import { makeStyles } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import { colors } from '../../../utilities/utilities'
import { useDoubleTap } from 'use-double-tap'
import { EntryCreatorContext } from '../contexts/EntryCreatorContext';


const CustomItemCell = ({itemId,  listId, cellId, handleFocusOut, customItem, value, handleDeleteCell,  handleAddCell}) => {
    const useStyles = makeStyles({
        item: {
            width: '25%',
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.4rem",
            padding: "0.2rem",
            marginRight: "0.1rem",
            color: `${colors.textPrimary}`,
        },
        container: {
            // width: '20%'
        },
        buttonDelete: {
            backgroundColor: colors.thumbDown,
            border: 'none',
            borderRadius: "0.4rem",
            margin: "0rem",
            color: `${colors.white}`,
            cursor: 'pointer'
        }
    })
    const [customItemCell, setCustomItemCell] = useState(value)
    const classes = useStyles()

    
    const handleAddCellWithEnterKey = (ev) => {
        if (ev.key === "Enter") {
            const serviceEnterPress = async (addCellCallback) => {
                handleChangeCustomItemCell(ev)
                await addCellCallback()
                serviceSelectingNewCell(ev.target)
            }
            serviceEnterPress(handleAddCell)
        }
    }

    const handleChangeCustomItemCell = (ev) => {
        const updatedCell = {id: cellId, order: customItem.cells.find(cell => cell.id === cellId).order, value: customItemCell }
        setCustomItemCell(ev.target.value)
        handleFocusOut(updatedCell, itemId, listId)
    }

    const serviceSelectingNewCell = (currentCell) => {
        const newCell = document.querySelector(`.${currentCell.className}`).nextSibling;
        if (newCell) {
             newCell.focus()
             newCell.select()
        } else {
            const newCellInNewRow = document.querySelector(`.${currentCell.className}`).parentNode.parentNode.nextSibling.firstChild.firstChild
            try{
                 newCellInNewRow.focus()
                 newCellInNewRow.select()
            } catch (e){
                currentCell.blur()
            }
        }
    }

    
    const handleDelete = () => {
        handleDeleteCell(cellId)
    }

    // service deleting with double tap - double click not serviced on mobiles
    const bind = useDoubleTap(() => {
        handleDeleteCell(cellId)
    });



    return (
        <>
        
        <input 
                className={classes.item} 
                type="text" 
                placeholder="cell"
                value={customItemCell}
                onChange={(e) => setCustomItemCell(e.target.value)}
                onBlur={handleChangeCustomItemCell}
                onDoubleClick={handleDelete}
                onKeyDown={handleAddCellWithEnterKey}
                {...bind}
                />
        </>
    )
}

export default CustomItemCell
