import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors } from '../../utilities/utilities'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        border: `1px solid ${colors.borderPrimary}`,
        backgroundColor: colors.white,
        borderRadius: '1rem',
        padding: '1rem',
        marginTop: '1rem',
        color: `${colors.textSecondary}`
    },
    content: {
        display: 'block',
        paddingTop: '1rem'
    },
    list: {
        paddingLeft: '1rem',
    }
})

export const EntryContentPart = ({header, text}) => {
    console.log(typeof text)
    const classes = useStyles()

    const inputData = (typeof text === 'object') ? (
        <ul className={classes.list}>
                {text.map(item => <li>{item.join(" - ")}</li>)}
        </ul>
    ) : (
        <p>
            {text}
        </p>
    )
    return (
        <div className={classes.container}>
            <h4>
                {header}:
            </h4>
            <article className={classes.content} >
                {inputData}
            </article>
        </div>
    )
}
