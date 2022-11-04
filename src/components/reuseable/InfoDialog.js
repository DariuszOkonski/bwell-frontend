import { makeStyles } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { colors } from '../../utilities/utilities';

const InfoDialog = ({info, bgColor, redirectPath="/"}) => {
    const history = useHistory();
    const useStyles = makeStyles(() => ({
        container: {
            backgroundColor: colors.modalBg,
            position: "absolute",
            top: 0,
            left:0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100%",
            zIndex: 10
        },
        resultInfo: {
            backgroundColor: bgColor,
            // border: `2px solid ${colors.textSecondary}`,
            borderRadius: "5px",
            padding: "2rem",
            fontSize: "1.4rem",
            color: colors.white,
            boxShadow: "3px 3px 3px gray"
        }
    }))
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div  onClick={() => history.push(redirectPath)} className={classes.resultInfo}>
                {info}
            </div>
        </div>
    )
}

export default InfoDialog
