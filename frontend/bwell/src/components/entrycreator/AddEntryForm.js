import { makeStyles } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { EntryContainer } from '../reuseable/EntryContainer'
import { viewportSize, colors, contentTypes, modules } from '../../utilities/utilities'
import EventButton from '../reuseable/EventButton'
import { EventNote } from '@material-ui/icons';
import TextAreaInput from './inputareas/TextAreaInput';
import IngredientsList from './inputareas/IngredientsList';
import { EntryCreatorContext }  from './contexts/EntryCreatorContext'
import { v4 } from 'uuid';
import { getIcon } from './EntryPreview';
import CustomButton from '../reuseable/CustomButton';
import { useHistory, useRouteMatch } from 'react-router';
import AddIcon from '@material-ui/icons/Add';
import CustomList from './inputareas/CustomList';
import { postNewEntry } from '../../utilities/BackendRequests';



const AddEntryForm = ({initModule}) => {
    const useStyles = makeStyles({
        headerContainer: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: '0.8rem 0'
        },
        moduleDropdown: {
            display: "flex",
            justifyContent: "flex-end",
        },
        select: {
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.4rem",
            padding: "0.2rem",
            color: `${colors.textSecondary}`,
            fontSize: '1.2rem'
        },
        titleInput: {
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.4rem",
            padding: "0.4rem",
            color: `${colors.textPrimary}`,
        },
        titleDiv: {
            flexGrow: "1",
            color: `${colors.textPrimary}`,
        },
        icon: {
            width: "3rem",
            marginRight: "1rem",
            color: `${colors.cardIconPrimary}`,
            '& svg' : {
                width: '100%', 
                height: '100%'
            },
            [`@media (min-width: ${viewportSize.tablet})`] : {
                width: '4.5rem'
              }
        },
        buttonContainer: {
            display: "flex",
            justifyContent: "space-evenly",
            padding: "1rem"
        },
        emptyContent: {
            display: "flex",
            justifyContent: "space-evenly",
            padding: "3rem 0",
            margin: "1rem",
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.4rem",
            fontWeight: 400
        }
    })

    const {path} = useRouteMatch();


    const { title, setTitle, module, setModule, addIngredientsList, addCustomList, addTextArea, ingredientsLists, textAreas, customLists,  } = useContext(EntryCreatorContext)
    // setModule(url.split("/")[1]);
    
    let history = useHistory();
    
    const classes = useStyles()
    
    const [content, setContent] = useState([])

    const [descriptionId, setDescriptionId] = useState(0, () => setDescriptionId(0))


    
    const [moduleObj, setModuleObj] = useState({module: path.split("/")[1], icon: getIcon(path.split("/")[1])})

    const changeModule = (newModule) => {
        history.push(`/${newModule}/addentry`)
        setModuleObj({module: newModule, icon: getIcon(newModule)})
        setModule(newModule)
    }
    
    const getContentListInOrder = () => {
        const content = [...ingredientsLists, ...textAreas, ...customLists]
        content.sort((a, b) => a.order - b.order)

        return content;
    }
    
    const handleModuleChange = (e) => changeModule(e.target.value)
    const handleTitleChange = (e) => setTitle(e.target.value)
    useEffect(() => {
        setContent(getContentListInOrder())

            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ingredientsLists, textAreas, moduleObj, customLists])

    const handleSubmitAddEntry = () => {
        if (!title || !content){
            alert("Not accepting empty entries")
            return;
        }
        postNewEntry(module, title, content, descriptionId)
        history.push(history.push(`/${module}`))
    }

    return (
        <EntryContainer key={moduleObj.module}>
            <div className={classes.moduleDropdown}>
                <label >
                    <select 
                        className={classes.select} value={module} onChange={handleModuleChange}
                    >
                        <option className={classes.option} value={modules.eatWell.name}>eatWell</option>
                        <option className={classes.option} value={modules.fitWell.name}>fitWell</option>
                        <option className={classes.option} value={modules.restWell.name}>restWell</option>
                        <option className={classes.option} value={modules.thinkWell.name}>thinkWell</option>
                    </select>
                </label>
            </div>
            <div className={classes.headerContainer}>
                <div className={classes.icon}>
                    {getIcon(module)}
                </div>

                <div className={classes.titleDiv}>
                    <input className={classes.titleInput} type="text" placeholder="title" value={title}
                    onChange={handleTitleChange}/>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                    <EventButton icon={<AddIcon/>} text="text" callback={() => addTextArea(v4(), "", "")} isAbsolute={false}/>
                    <EventButton icon={<AddIcon/>} text="table" callback={() => addCustomList(v4())} isAbsolute={false}/>
                    <EventButton icon={<AddIcon/>} text="recipe" callback={() => addIngredientsList(v4())} isAbsolute={false}/>
            </div>

            {content.length > 0 ? content.map(content => {
                switch (content.type) {
                    case contentTypes.ingredientsList:
                        return <IngredientsList key={content.id} listId={content.id}/>
                    case contentTypes.textArea:
                        return <TextAreaInput id={content.id} key={content.id}/>
                    case contentTypes.customList:
                        return <CustomList listId={content.id} key={content.id} />
                }
            }) : 
            (
                <div className={classes.emptyContent}>
                    <p>Insert some data</p>
                </div>
            )}
        
            <div className={classes.buttonContainer}>
                    <CustomButton text="Back" linkTo="/" isAbsolute={false}/>
                    <EventButton icon={<EventNote/>} text="Add entry" callback={handleSubmitAddEntry} isAbsolute={false}/>
            </div>

        </EntryContainer>
    )
}

export default AddEntryForm
