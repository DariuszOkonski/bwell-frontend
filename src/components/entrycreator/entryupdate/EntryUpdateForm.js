import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { entry } from '../../../utilities/BackendRequests';
import UserService from '../../../utilities/UserService';
import { colors } from '../../../utilities/utilities';
import InfoDialog from '../../reuseable/InfoDialog';
import AddEntryForm from '../AddEntryForm'
import { EntryCreatorContext } from '../contexts/EntryCreatorContext';

const EntryUpdateForm = (props) => {
    const {url, path} = useRouteMatch();
    const entryId = props.match.params.id;
    const module = url.split("/")[1]

    const [isAuthor, setIsAuthor] = useState(true)

    const { populateContextWithEntryData } = useContext(EntryCreatorContext)

    useEffect(() => {
        const getEntry = async () => {
            const user = await UserService(true);
            const ent = await entry.getEntryByIdIfAuthor(entryId, module);
            // setIsAuthor(ent.author && ent.author.id === user.id);
            populateContextWithEntryData(ent);
            console.log(ent)
        }
    
        getEntry()
    }, [])

    return (

        <div>
            {
                isAuthor ? 
                    <AddEntryForm updateMode={true}/> :
                    <InfoDialog info="Only author of the entry can update it." bgColor={colors.handDown}/>
            }
        </div>
    )
}

export default EntryUpdateForm
