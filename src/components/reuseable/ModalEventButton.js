import { makeStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react'
import { viewportSize } from '../../utilities/utilities';
import MealChoiceButtons from '../eatwell/dietplan/MealChoiceButtons';
import { EntryContainer } from './EntryContainer';
import EventButton from './EventButton'

const ModalEventButton = ({alternateContent=null, text="Add to plan"}) => {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

        content: {
            // marginTop: "5rem",
            maxWidth: viewportSize.tablet,
            // height: "30%",
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
            text={text} isAbsolute={false}/>

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
                <div className={classes.container}>
                    
                    <div className={classes.content}>
                        <EntryContainer>
                            {!alternateContent ? <MealChoiceButtons modalCloseCallback={handleClose}/> :
                            alternateContent}
                        </EntryContainer>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalEventButton
