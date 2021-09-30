import { makeStyles } from '@material-ui/core'
import React from 'react'
import { colors } from '../../../utilities/utilities'

const TextAreaInput = () => {
    
    
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

    const classes = useStyles()
    return (
        <div className={classes.container}>
            <input className={classes.stylingInput} type="text" placeholder="Text header"/>
            <textarea className={classes.stylingInput + " " + classes.textArea} placeholder="Your content"/>
        </div>
    )
}

export default TextAreaInput
