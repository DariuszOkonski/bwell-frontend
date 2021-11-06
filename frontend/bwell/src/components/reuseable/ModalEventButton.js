import { makeStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react'
import MealChoiceButtons from '../eatwell/dietplan/MealChoiceButtons';
import { EntryContainer } from './EntryContainer';
import EventButton from './EventButton'

const ModalEventButton = (props) => {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

        content: {
            marginTop: "10rem",
            minWidth: "20%",
            minHeight: "30%",
        }
    })
    
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    return (
        <>
            <EventButton 
            callback={handleOpen} 
            text="Add to plan" isAbsolute={false}/>

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                <div className={classes.container}>
                    
                    <div className={classes.content}>
                        <EntryContainer>
                            <MealChoiceButtons modalCloseCallback={handleClose}/>
                        </EntryContainer>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalEventButton
