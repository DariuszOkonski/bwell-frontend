import { makeStyles } from '@material-ui/core'
import React from 'react'
import { colors } from '../../../utilities/utilities'

const TextAreaInput = () => {
    
    
    const useStyles = makeStyles({
        container: {
            
        }, 
        stylingInput: {
                border: `1px solid ${colors.borderPrimary}`,
                borderRadius: "0.2rem",
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
        <div className="container">
            <input className={classes.stylingInput} type="text" placeholder="Text header"/>
            <textarea className={classes.stylingInput + " " + classes.textArea} placeholder="Your content"/>
        </div>
    )
}

export default TextAreaInput
