import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { EntryCreatorContext } from '../contexts/EntryCreatorContext';
import { v4 } from 'uuid';
import CustomItemCell from './CustomItemCell';
import AddIcon from '@material-ui/icons/Add';
const CustomItem = ({listId, itemId, refreshList, handleAddItem}) => {
    const useStyles = makeStyles({
        container: {
            margin: '0.5rem 0',
            display: 'flex',
            justifyContent: 'space-between'
        },
        // item: {
        //     width: '20%',
        //     border: `1px solid ${colors.borderPrimary}`,
        //     borderRadius: "0.4rem",
        //     padding: "0.2rem",
        //     color: `${colors.textPrimary}`,
        // },
        unit: {
            width: '20%'
        },
        row: {
            width: '100%',
            display: "flex",
        },
        buttonDelete: {
            backgroundColor: colors.thumbDown,
            border: 'none',
            borderRadius: "0.4rem",
            // marginLeft: "0.25rem",
            color: `${colors.white}`,
            cursor: 'pointer'
        },
        buttonAdd: {
            backgroundColor: colors.thumbUp,
            border: 'none',
            borderRadius: "0.4rem",
            margin: "0 0.25rem",
            color: `${colors.white}`,
            cursor: 'pointer',
        },
        disabled: {
            backgroundColor: colors.borderPrimary,
            cursor: 'default'
        },
        checkbox: {
            fontSize: "0.8rem"
        }
    })
    const classes = useStyles();
    const { removeCustomItem, editCustomItem, removeCustomCell, getCustomList } = useContext(EntryCreatorContext)
    const currentList = getCustomList(listId)
    const [customItem, setCustomItem] = useState(currentList && currentList.content.find(row => row.id === itemId));
    const [isHeaderRow, setIsHeaderRow] = useState(false)

    const isItemFull = () => customItem.cells.length >= 4

    const handleDeleteItem = () => {
        removeCustomItem(itemId, listId)
        setCustomItem(null)
        refreshList()
    }    

    // updates item by adding a cell or if item is full triggers adding item to parent list
    const handleAddCell = (evt) => {
        
        if (customItem.cells.length < 4) {
            const cells = [...customItem.cells, {id: v4(), order: customItem.cells.length, value: ""}]
            cells.sort()
            const local = {
                id: itemId,
                order: customItem.order, 
                cells: cells, 
            }
            editCustomItem(local, listId)
            setCustomItem( local)
        } else {
            handleAddItem()
        }
    }

    // updates item by deletion of cell
    const handleDeleteCell = (cellId) => {
        const cells = customItem.cells.filter(cell => cellId !== cell.id)
        
        const local = {
            id: itemId,
            order: customItem.order, 
            cells: cells, 
        }
        editCustomItem(local, listId)
        setCustomItem( local)
    }

    // updates item by updateding a cell
    const handleFocusOut = (updatedCell, itemId, listId) => {
        const cells = [...customItem.cells.filter(cell => cell.id !== updatedCell.id ), updatedCell]
        
        cells.sort((cell1, cell2) => cell1.order - cell2.order)
        const local = {
            id: itemId,
            order: customItem.order, 
            cells: cells,
            isHeaderRow 
            
        }
        editCustomItem(local, listId)
        setCustomItem(local)
    }
    
    const showCells = customItem && customItem.cells && customItem.cells.map(cell => 
            <CustomItemCell
                key={cell.order}
                value={cell.value} 
                itemId={itemId} 
                listId={listId} 
                cellId={cell.id} 
                customItem={customItem}
                setCustomItem={setCustomItem}
                handleAddCell={handleAddCell}
                handleDeleteCell={handleDeleteCell} 
                handleFocusOut={handleFocusOut}
            /> 
        )

    return (
        customItem ? <><div 
        className={classes.container}>
            
            <div className={classes.row}>
            {
                showCells
            }
            </div>
            <button className={`${classes.buttonAdd} ${ isItemFull() && classes.disabled}`} disabled={isItemFull()} onClick={handleAddCell}>
                <AddIcon />

            </button>
            <button className={classes.buttonDelete} onClick={handleDeleteItem}>
                <DeleteOutlineIcon />
            </button>
        </div>
        {customItem.order == 0 && <div className={classes.checkbox}><label><input value={isHeaderRow} onChange={() => setIsHeaderRow(!isHeaderRow)} type="checkbox"/> mark first row as header</label></div>}</>
        : <></>
    )
}


export default CustomItem
