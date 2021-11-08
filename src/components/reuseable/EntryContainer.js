import { makeStyles } from '@material-ui/core'
import React from 'react'
import { colors } from '../../utilities/utilities'

const useStyles = makeStyles({
    entryContainer: {
        width: '100%',
        boxSizing: "border-box",
        borderRadius: '1rem',
        border: `1px solid ${colors.borderPrimary}`,
        padding: '1rem 1rem',
        backgroundColor: `${colors.white}`,
        marginTop: '1rem'
    }
})

export const EntryContainer = ({children}) => {
    const classes = useStyles()
    
    return (
        <div className={classes.entryContainer}>
            {children}
        </div>
    )
}
