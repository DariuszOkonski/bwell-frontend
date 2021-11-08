import React from 'react'
import EventButton from './EventButton'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useHistory, useRouteMatch } from 'react-router';
import { deleteEntry } from '../../utilities/BackendRequests';


const DeleteButton = ({entryId}) => {
    const {path} = useRouteMatch();
    const history = useHistory()
    const handleDelete = () => {
        const module = path.split("/")[1]
        deleteEntry(module, entryId)
        console.log(entryId, module)
        history.push(`/${module}`)
    }
    return (
        <EventButton text="remove" 
            icon={<DeleteOutlineIcon/>} 
            isAbsolute={false} 
            callback={handleDelete} />
    )
}

export default DeleteButton
