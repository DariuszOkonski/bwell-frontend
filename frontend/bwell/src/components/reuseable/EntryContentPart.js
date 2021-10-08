import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { colors, contentTypes, viewportSize } from '../../utilities/utilities'

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
    tableContainer:{
        margin: "0 auto",
        width: '100%',
        backgroundColor: colors.white,
        // padding: '1rem',
    },
    content: {
        // display: 'block',
        paddingTop: '1rem',
        display: "flex",
        width: "100%"
    },
    list: {
        paddingLeft: '1rem',
    },
    row: {
        // display: "flex",
        // maxWidth: viewportSize.tablet
        // justifyContent: "center"
    },
    cell: {
        padding: "0.4rem",
        // margin: "0.4rem",
        width: "25%",
        // width: "15%",
        backgroundColor: colors.white,
        borderRadius: "0.5rem",
        border: `1px solid ${colors.borderPrimary}`,

        
    }
})

// TODO => install UUID package and replace Math.random
export const EntryContentPart = ({header, type, text}) => {
    const classes = useStyles()


    const getFormatted = () => {
        if (type === contentTypes.ingredientsList)
            return <ul className={classes.list}>
                    {text.map(item => {
                    return <li key={Math.random()}>{item[0] != "" ? `${item[0]} - ${item[1]} ${item[2]}` : "[ blank ]"}</li>
                })}
            </ul>
        else if (type === contentTypes.textArea)
            return <p>
                    {text}
                </p>
        else if (type === contentTypes.customList)
            return (
            <table className={classes.tableContainer}>
                <tbody>
                {text.map(row => {
                    return (
                    <tr key={row.id} className={classes.row}>
                        {
                            row.cells.map(cell => {
                                return <td key={cell.id} className={classes.cell}>{cell.value !== "" ? cell.value : "[ empty ]"}</td>
                            })
                        }
                    </tr>
                    )
                })}
                </tbody>
            </table>
            )
        return "";
    }


    const inputData = getFormatted()
    return (
        <div className={classes.container}>
            <h4>
                {header != "" ? header : "Your header"}:
            </h4>
            <article className={classes.content} >
                {inputData != "" ? inputData : "Your content"}
            </article>
        </div>
    )
}


EntryContentPart.defaultProps = {
    header: "",
    text: [],
}
