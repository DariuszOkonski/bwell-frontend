import React, { useEffect, useState } from 'react';
import { EntryContainer } from '../reuseable/EntryContainer';
import { EntryContentPart } from '../reuseable/EntryContentPart';
import { EntryFooter } from '../reuseable/EntryFooter';
import { EntryHeader } from '../reuseable/EntryHeader';
import EntryPageContainer from '../reuseable/EntryPageContainer';
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { useRouteMatch } from 'react-router';

const ENTRY_ID_INDEX = 3

const Activity = () => {
    const {path, url} = useRouteMatch();
    const [activity, setActivity] = useState(null)
    
    const url_parts = url.split("/")
    
    useEffect(() => {
        // setRecipe(fake_getRecipe(Number(props.match.params.id)))
        const getActivity = async () => {
            const ActivityFromServer = await fetchActivity()
            setActivity(ActivityFromServer)
        }
        console.log(activity, " Activity !")
        getActivity()
    },[])

    const fetchActivity = async () => {
        const response = await fetch(`http://localhost:3001/activities/${Number(url_parts[ENTRY_ID_INDEX])}`)
        const data = await response.json()

        return data 
    }
    
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
                        return <EntryContentPart type={part.type} header={part.header} text={part.text} key={Math.random()}/>
                    })
                }

                <EntryFooter />
            </EntryContainer>
            
        </EntryPageContainer>
     );
}
 
export default Activity;