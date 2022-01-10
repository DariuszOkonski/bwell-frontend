import React, { useEffect, useState } from 'react';
import { EntryContainer } from '../reuseable/EntryContainer';
import { EntryContentPart } from '../reuseable/EntryContentPart';
import { EntryFooter } from '../reuseable/EntryFooter';
import { EntryHeader } from '../reuseable/EntryHeader';
import EntryPageContainer from '../reuseable/EntryPageContainer';
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { useRouteMatch } from 'react-router';
import { fitWell } from '../../utilities/BackendRequests';
import DeleteButton from '../reuseable/DeleteButton';

const ENTRY_ID_INDEX = 3

const Activity = () => {
    const {path, url} = useRouteMatch();
    const [activity, setActivity] = useState(null)
    
    const url_parts = url.split("/")
    
    useEffect(() => {
        // setRecipe(fake_getRecipe(Number(props.match.params.id)))
        const getActivity = async () => {
            const ActivityFromServer = await fitWell.fetchActivity(url_parts[ENTRY_ID_INDEX])
            setActivity(ActivityFromServer)
        }
        console.log(activity, " Activity !")
        getActivity()
    },[])

    // const fetchActivity = async () => {
    //     const response = await fetch(`http://localhost:3001/activities/${Number(url_parts[ENTRY_ID_INDEX])}`)
    //     const data = await response.json()

    //     return data 
    // }
    
    return ( 
        activity && <EntryPageContainer>
            <SimpleBreadcrumbs path={path} header={activity.title} />

            <EntryContainer>
                <EntryHeader 
                    header={activity.title} 
                    icon={<DirectionsBikeIcon />}
                    rating={activity.rating}
                />
                {
                    activity.content.map(part => {
                        return <EntryContentPart type={part.type} header={part.header} text={part.text ? part.text : part.content} key={Math.random()}/>
                    })
                }

                <EntryFooter entryId={activity.id} module="fitwell" author={activity.author ? activity.author.email : "Unknown"} />
                <DeleteButton entryId={activity.id}/>
            </EntryContainer>
            
        </EntryPageContainer>
     );
}
 
export default Activity;