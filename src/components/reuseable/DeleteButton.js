import React, { useState } from 'react'
import EventButton from './EventButton'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useHistory, useRouteMatch } from 'react-router';
import { deleteEntry } from '../../utilities/BackendRequests';
import { makeStyles } from '@material-ui/core';
import InfoDialog from './InfoDialog';
import { colors } from '../../utilities/utilities';


const DeleteButton = ({entryId}) => {
    
    const {path} = useRouteMatch();
    const history = useHistory();
    const [resultInfo, setResultInfo] = useState({});
    const [isClicked, setIsClicked] = useState(false)
     
    const handleDelete = async () => {
        const module = path.split("/")[1]
        const isSucceed = await deleteEntry(module, entryId);
        setIsClicked(true);
        setResultInfo(isSucceed === true ? 
                        {message: "Entry was removed successfully", 
                        bgColor: colors.thumbUp} : 
                        {message: "Entry was not removed. Maybe you are not author of this one?", 
                        bgColor: colors.thumbDown});
        setTimeout(() => {
            if (isSucceed === true) history.push(`/${module}`)
            setIsClicked(false);
        }, isSucceed !== true ? 3000 : 1500);
        
    }
    return <>
        {isClicked && <InfoDialog info={resultInfo.message} bgColor={resultInfo.bgColor}/>}
        <EventButton text="remove" 
        icon={<DeleteOutlineIcon/>} 
        isAbsolute={false} 
        callback={handleDelete}
        isClicked={isClicked} />
    </>
    
}

export default DeleteButton
