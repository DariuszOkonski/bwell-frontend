// general component,  custom list, custom row, custom column

// remove whole component
// add single row
// remove single row
// add single column/cell
// remove single cell/

import React, { useContext, useState } from 'react'
import EventButton from '../../reuseable/EventButton'
import IngredientItem from './IngredientItem'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';
import { EntryCreatorContext } from '../contexts/EntryCreatorContext';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { v4 } from 'uuid';
import CustomItem from './CustomItem';

const CustomList = ({listId}) => {    

    const useStyles = makeStyles({
        container: {
            margin: '1.5rem 0'
        },
        header: {
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.4rem",
            display: "block",
            padding: "0.3rem",
            width: '100%',
            color: `${colors.textPrimary}`,
            fontWeight: '500',
            fontSize: "1rem"
        },
        headerContainer: {
            display: 'flex'
        },
        buttonContainer: {
            marginTop: "0.5rem",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonDelete: {
            backgroundColor: colors.thumbDown,
            border: 'none',
            borderRadius: "0.4rem",
            color: `${colors.white}`,
            cursor: 'pointer',
            marginLeft: '0.2rem'
        }
    })

        const classes = useStyles();    
    // const {Customs, addCustomList } = useContext(EntryCreatorContext)    
    const { getCustomList, customLists, addCustomListItem, editCustomListTitle, removeCustomList } = useContext(EntryCreatorContext)    
    
    const [currentList, setCurrentList] = useState(getCustomList(listId))
    const [title, setTitle] = useState(currentList && currentList.header)
    
    const handleAddItem = (e) => {
        addCustomListItem(v4(), listId);
        setCurrentList(getCustomList(listId))
    }

    const refreshList = () => setCurrentList(getCustomList(listId))
    
    const handleChangeTitle = (e) => {
        editCustomListTitle(e.target.value, listId)
        setCurrentList(getCustomList(listId))
    }
    
    const handleRemoveCustomsList = () => {
        removeCustomList(listId);
        setCurrentList(null)

    }

    const showCustoms =  currentList && currentList.content && currentList.content.map(
        (item) => <CustomItem 
            listId={listId} itemId={item.id} key={item.id} handleAddItem={handleAddItem} refreshList={refreshList}
        />);
    return (
        currentList ? <div className={classes.container}>
            <div className={classes.headerContainer}>
                <input className={classes.header} value={title} placeholder="Customs title" onChange={(e) => setTitle(e.target.value)}
                onBlur={handleChangeTitle}/>
                <button className={classes.buttonDelete} onClick={handleRemoveCustomsList}>
                    <DeleteOutlineIcon />
                </button>
            </div>

            {showCustoms}

            <div className={classes.buttonContainer}>
                <EventButton text="Add new item" callback={handleAddItem} isAbsolute={false} />
            </div>

        </div>
        :
        <></>
    )
}

export default CustomList