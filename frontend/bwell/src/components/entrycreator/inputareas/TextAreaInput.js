import { makeStyles } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { colors } from '../../../utilities/utilities'
import { EntryCreatorContext } from '../contexts/EntryCreatorContext'

const TextAreaInput = ({id}) => {
    
    
    const useStyles = makeStyles({
        container: {
            marginBottom: '1rem'
        }, 
        stylingInput: {
                border: `1px solid ${colors.borderPrimary}`,
                borderRadius: "0.4rem",
                width: '100%',
                padding: "0.4rem",
                color: `${colors.textPrimary}`,
                fontFamily: "Lato",
                marginTop: "2rem"
            },
            textArea: {
                minHeight: "5rem",
                fontFamily: "Lato",
                marginTop: "0.8rem"
            }
        }
    )

    const [header, setHeader] = useState("")
    const [text, setText] = useState("")

    const handleHeader = (e) => {
        setHeader(e.target.value)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const { editTextArea, removeTextArea } = useContext(EntryCreatorContext)
    const classes = useStyles()

    useEffect(() => {
        editTextArea({
            id,
            header,
            text,
        })
    }, [header, text])
    return (
        <div className={classes.container}>
            <input value={header} onChange={handleHeader} className={classes.stylingInput} type="text" placeholder="Text header"/>
            <textarea value={text} onChange={handleText} className={classes.stylingInput + " " + classes.textArea} placeholder="Your content"/>
        </div>
    )
}

export default TextAreaInput
