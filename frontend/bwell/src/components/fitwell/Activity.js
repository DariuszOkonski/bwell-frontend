import React from 'react';
import { EntryContainer } from '../reuseable/EntryContainer';
import { EntryContentPart } from '../reuseable/EntryContentPart';
import { EntryFooter } from '../reuseable/EntryFooter';
import { EntryHeader } from '../reuseable/EntryHeader';
import EntryPageContainer from '../reuseable/EntryPageContainer';
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

const Activity = () => {
    return ( 
        <EntryPageContainer>
            <SimpleBreadcrumbs />

            <EntryContainer>
                <EntryHeader 
                    header="Activity 1" 
                    icon={<DirectionsBikeIcon />}
                />

                <EntryContentPart 
                    header="Warm up" 
                    text="How do you use Lorem Ipsum in VS code?
                    A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type lorem ipsum and select to insert either a line or paragraph."
                />

                <EntryContentPart 
                    header="Warm up" 
                    text="How do you use Lorem Ipsum in VS code?
                    A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type lorem ipsum and select to insert either a line or paragraph."
                />

                <EntryContentPart 
                    header="Warm up" 
                    text="How do you use Lorem Ipsum in VS code?
                    A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type lorem ipsum and select to insert either a line or paragraph."
                />

                <EntryFooter />
            </EntryContainer>
            
        </EntryPageContainer>
     );
}
 
export default Activity;