import { makeStyles } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { colors } from '../../../utilities/utilities'
import { EntryCreatorContext } from '../contexts/EntryCreatorContext'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const TextAreaInput = ({id, head='', txt=""}) => {
    
    
    const useStyles = makeStyles({
        container: {
            marginBottom: '1rem',
            marginTop: "2rem"
        },
        headerContainer: {
            display: 'flex'
        },
        buttonDelete: {
            backgroundColor: colors.thumbDown,
            border: 'none',
            borderRadius: "0.4rem",
            color: `${colors.white}`,
            cursor: 'pointer',
            marginLeft: '0.2rem'
        },
        stylingInput: {
                border: `1px solid ${colors.borderPrimary}`,
                borderRadius: "0.4rem",
                width: '100%',
                padding: "0.4rem",
                color: `${colors.textPrimary}`,
                fontFamily: "Lato",
                // marginTop: "2rem"
        },
        textArea: {
            minHeight: "5rem",
            fontFamily: "Lato",
            marginTop: "0.8rem"
        }
        },

        
    )

    const [header, setHeader] = useState(head)
    const [text, setText] = useState(txt)

    const handleHeader = (e) => {
        setHeader(e.target.value)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const { editTextArea, removeTextArea } = useContext(EntryCreatorContext)
    const classes = useStyles()

    const handleUpdate = () => {
        editTextArea({
            id,
            header,
            text,
        })
    }

    const handleRemoveTextAreas = () => {
        removeTextArea(id)
    }
    return (
        <div className={classes.container}>
            <div className={classes.headerContainer}>
                <input value={header} onChange={handleHeader} onBlur={handleUpdate} className={classes.stylingInput} type="text" placeholder="Text header"/>

                <button className={classes.buttonDelete} onClick={handleRemoveTextAreas}>
                    <DeleteOutlineIcon />
                </button>
            </div>
            <textarea value={text} onChange={handleText} onBlur={handleUpdate} className={classes.stylingInput + " " + classes.textArea} placeholder="Your content"/>
        </div>
    )
}

export default TextAreaInput
