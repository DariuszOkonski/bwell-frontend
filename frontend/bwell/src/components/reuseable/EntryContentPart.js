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
        minWidth: '60%',
        borderRadius: "0.4rem",

        backgroundColor: colors.borderPrimary,
    },
    content: {
        paddingTop: '1rem',
        display: "flex",
        width: "100%"
    },
    list: {
        paddingLeft: '1rem',
    },
    cell: {
        padding: "0.4rem",
        // width: "25%",
        backgroundColor: colors.white,
        borderRadius: "0.2rem",
        border: `1px solid ${colors.borderPrimary}`,
    },
    header : {
        padding: "0.4rem",
        // width: "25%",
        color: colors.white,
        backgroundColor: colors.footerPrimary,
        borderRadius: "0.2rem",
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
                        console.log(item);
                    return <li key={Math.random()}>{
                        item.id && item.ingredient && item.quantity && item.measure ? `${item.ingredient} - ${item.quantity} ${item.measure} ` : 
                        "[ yet empty ]"}</li>
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
                                return row.isHeaderRow ?
                                 <th key={cell.id} className={classes.header}>{cell.value !== "" ? cell.value : "[ empty ]"}</th> 
                                 :
                                 <td key={cell.id} className={classes.cell}>{cell.value !== "" ? cell.value : "[ empty ]"}</td> 
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
                {header != "" ? header : "Your header"} 
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
