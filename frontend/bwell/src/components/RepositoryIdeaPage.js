import React from 'react'
import { useParams, useRouteMatch } from 'react-router';
import SimpleBreadcrumbs from './reuseable/SimpleBreadcrumbs';
import { useEffect } from 'react';
import { useState } from 'react';
import { EntryContainer } from './reuseable/EntryContainer';
import { EntryContentPart } from './reuseable/EntryContentPart';
import { EntryFooter } from './reuseable/EntryFooter';
import { EntryHeader } from './reuseable/EntryHeader';
import EntryPageContainer from './reuseable/EntryPageContainer';
import { endpoints } from '../utilities/utilities';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';


const RepositoryIdeaPage = (props) => {

    const [ideas, setIdeas] = useState(null);
    let APIurl = "";

    if (props.repositoryType === 'restWell') APIurl = endpoints.APIhost + endpoints.APIrestWell;
    if (props.repositoryType === 'thinkWell') APIurl = endpoints.APIhost + endpoints.APIthinkWell;

    const CardIcon = () => {
        switch(props.repositoryType){
          case 'restWell':
            return <WeekendOutlinedIcon/>;
          case 'thinkWell':
            return <EmojiObjectsOutlinedIcon />;
          default:
            return 'none'
        }
      }

    useEffect(() => {
        const getIdeas = async () => {
            const ideasFromServer = await fetchIdeas()
            setIdeas(ideasFromServer)
        }
        getIdeas()
    },[]);
    
    let { id } = useParams();

    const fetchIdeas = async () => {
        const response = await fetch(APIurl + "/" + id)
        const data = await response.json()

        return data 
    }

    const {url} = useRouteMatch();

    return (
        ideas &&
        <EntryPageContainer>
            <SimpleBreadcrumbs path={url} header={ideas.title} />
            <EntryContainer>
                <EntryHeader 
                    header={ideas.title} 
                    icon={<CardIcon />}
                    rating={ideas.rating}
                />
                {
                    ideas.content.map(part => {
                        return <EntryContentPart header={part.header} text={part.text} key={Math.random()}/>
                    })
                }

                <EntryFooter />
            </EntryContainer>
        </EntryPageContainer>
    )
}

export default RepositoryIdeaPage
