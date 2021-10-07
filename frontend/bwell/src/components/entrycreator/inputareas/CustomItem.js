import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { EntryCreatorContext } from '../contexts/EntryCreatorContext';
import { v4 } from 'uuid';

const CustomItem = (props) => {
    const useStyles = makeStyles({
        container: {
            margin: '0.5rem 0',
            display: 'flex',
            justifyContent: 'space-between'
        },
        item: {
            width: '30%',
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.4rem",
            padding: "0.2rem",
            color: `${colors.textPrimary}`,
        },
        unit: {
            width: '20%'
        },
        buttonDelete: {
            backgroundColor: colors.thumbDown,
            border: 'none',
            borderRadius: "0.4rem",
            color: `${colors.white}`,
            cursor: 'pointer'
        }
    })
    const classes = useStyles();
    const { removeCustomItem, editCustomItem, removeCustomCell } = useContext(EntryCreatorContext)
    
    const [customItem, setCustomItem] = useState([{id: v4(), order: 1, value: "" }]);
    

    const handleDeleteItem = () => {
        removeCustomItem(props.id, props.listId)
    }    

    const handleChangeCustomItem = (evt) => {
        setCustomItem(evt.target.value)
    }

    const handleDeleteCell = (evt) => {
        removeCustomCell(props.id, props.listId, props.itemId)   
    }

    const handleAddItem = (evt) => {

    }

    const handleFocusOut = () => {
        editCustomItem({
            id: props.id, 
            customItem, 
            
        }, props.listId)
    }     

    return (
        <div className={classes.container}>
            <input 
                className={classes.item} 
                type="text" 
                placeholder="CustomItem" 
                value={customItem}
                onChange={handleChangeCustomItem}
                onBlur={handleFocusOut}
            />

            <button className={classes.buttonDelete} onClick={handleAddItem}>
                add
            </button>
            <button className={classes.buttonDelete} onClick={handleDeleteItem}>
                <DeleteOutlineIcon />
            </button>
        </div>
    )
}

export default CustomItem
