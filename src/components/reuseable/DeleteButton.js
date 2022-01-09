import React from 'react'
import EventButton from './EventButton'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useHistory, useRouteMatch } from 'react-router';
import { deleteEntry } from '../../utilities/BackendRequests';


const DeleteButton = ({entryId}) => {
    const {path} = useRouteMatch();
    const history = useHistory()
    let isClicked = false;

    const handleDelete = () => {
        const module = path.split("/")[1]
        deleteEntry(module, entryId)
        isClicked = true;
        console.log(entryId, module)
        setTimeout(() => {
            history.push(`/${module}`)
            isClicked = false;
        }, 500);
        
    }
    return (
        <EventButton text="remove" 
            icon={<DeleteOutlineIcon/>} 
            isAbsolute={false} 
            callback={handleDelete}
            isClicked />
    )
}

export default DeleteButton
