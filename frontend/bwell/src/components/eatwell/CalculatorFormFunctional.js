import RestaurantIcon from '@material-ui/icons/Restaurant';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { colors, viewportSize } from '../../utilities/utilities';
import { eatWell } from '../../utilities/BackendRequests';
import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

const CalculatorFormFunctional = ({updateResults}) => {
    const styles = makeStyles( {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: "row",
        },
        iconContainer: {
            alignSelf: 'flex-start',            
        },
        icon: {
            fontSize: '6rem',
            color: colors.thumbUp
        },
        formContainer: {
            width: '100%'
        },
        formHeader: {
            fontSize: '1.5rem',
            color: colors.textPrimary,
            textAlign: 'center',
            fontWeight: '400',
            marginBottom: '1rem '
        },
        label: {
            position: 'relative',
            display: 'block',
            height: '2rem',
            margin: '0.15rem 0 0.2rem'
        },
        inputIcon: {
            position: 'absolute',
            top: '5px',
            left: '5px',
            zIndex: '2',
            color: colors.buttonPrimary
        },
        inputIcon2: {
            position: "relative",
            top: '0',
            left: '0',
            zIndex: '2',
            color: colors.buttonPrimary
        },
        input: {
            position: 'absolute',
            top: '0',
            left: '0',
            padding: '0.3rem',
            fontSize:"1rem",
            paddingRight: '0',
            paddingLeft: '30px',
            zIndex: '1',
            width: '100%',
            borderRadius: '0.5rem',
            border: `1px solid ${colors.textSecondary}`,
            color: colors.textPrimary,
        },
        labelCheck: {
            display: "flex",
            height: '2rem',
            margin: '0.4rem 0 0.6rem 0',
            alignItems: "center",
            width: '100%',
            // justifyContent: "space-between",
            borderRadius: '0.5rem',
            // border: `1px solid ${colors.textSecondary}`,
            color: colors.textPrimary,
        },
        inputCheck: {
            // padding: "1rem",
            marginRight: "0.6rem"
        },
        button: {
            border: 'none',
            cursor: 'pointer',
            textTransform: 'capitalize',
            backgroundColor: colors.buttonPrimary,
            borderRadius: '2rem',
            color: colors.white,
            padding: '0.2rem 0.6rem',
            fontSize: "1.2rem",
            letterSpacing: "1px",

            // fontWeight:"600",

            marginTop: '0.6rem'
        },
        info: {
            position: "relative",
            color: colors.textSecondary,
            zIndex: "2",
            fontSize: "1rem",
            fontWeight:"600",
            letterSpacing: "1px",
            // textAlign: "right",
            padding: "0.2rem 0 0.1rem 0"
            // marginBottom: "0",
        }
    })()

    const parseToVariable = (text) => {
        const toChange = text && text[0].toLowerCase() + text.slice(1) || text;
        return toChange.split(" ").join("")
    };
    


    const id = Math.floor(Math.random()*100)

    const theOrder = [
    {step: 1, max: 200, min: 0, name:"Age"},
    {step: 1, max: 300, min: 0, name:"Body Mass In Kg"},
    {step: 1, max: 1000, min: 0, name:"Height In Cm"},
    {step: 0.1, max: 2, min: 1, name:"Activity Ratio"},
    {step: 0.01, max: 1, min: 0, name:"Protein Percentage"},
    {step: 0.01, max: 1, min: 0, name:"Fat Percentage"},
    {step: 0.01, max: 1, min: 0,name:"Carbohydrates Percentage"},
]
    const [numericalData, setNumericalData] = useState({
        age: null,
        bodyMassInKg: null,
        heightInCm: null,
        activityRatio: null,
        proteinPercentage: null,
        fatPercentage: null,
        carbohydratesPercentage: null,
    })

    const [otherData, setOtherData] = useState({        
        goal: 'KeepCurrent',
        strategy: 'Complete',
        isMan: false,
})


    const handleNumericalChange = (key, value) => {
        const local = {...numericalData}
        local[key] = value
        setNumericalData({...local})
    }

    const handleOtherDataChange = (key, value) => {        
        const local = {...otherData}
        // console.log(local);
        local[key] = value
        console.log(local);        
        setOtherData({...local})
    }   

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        const input = {id, ...numericalData, ...otherData}
        console.log(input);

        const resp = await eatWell.fetchPostUserCalculatorData(input)
        updateResults(resp);
        // console.log(resp);
    }


    return (
        <div className={styles.container}>
                
                <div className={styles.iconContainer}>
                    <PostAddIcon className={styles.icon} />
                </div>
                <div className={styles.formContainer}>
                    <h2 className={styles.info + " " + styles.formHeader}>Create New Plan</h2>
                    <form className={{margin: '0 auto'}} onSubmit={handleSubmit}>
                        {theOrder.map(key => {
                            const asVariable = parseToVariable(key.name);
                            const isProvided = numericalData[asVariable] != null &&  numericalData[asVariable] != "";
                            return <div>
                                {isProvided ? <div className={styles.info}>{key.name}</div> : <></>}
                                <label className={styles.label}>
                                    <RestaurantIcon className={styles.inputIcon} />
                                    <input 
                                        className={styles.input}
                                        type="number"
                                        max={key.max}
                                        min={key.min}
                                        step={key.step}
                                        name={key.name}
                                        placeholder={key.name}
                                        value={numericalData[asVariable]}
                                        onChange={(ev) => handleNumericalChange(asVariable, ev.target.value)}
                                    />
                                    
                                </label>
                            </div>
                        })}
                        
                        <div>
                        <div className={styles.info}>Goal</div>

                            <label className={styles.label}>
                                <RestaurantIcon className={styles.inputIcon}    />
                                <select 
                                    className={styles.input}
                                    name="goal" onChange={(ev) => handleOtherDataChange("goal", ev.target.value)}
                                >
                                    <option value="KeepCurrent">Keep Current</option>
                                    <option value="Reduction">Reduction</option>
                                    <option value="GainMass">Gain Mass</option>
                                    <option value="IntenseMass">Intense Mass</option>
                                    <option value="IntenseReduction">Intense Reduction</option>
                                </select>
                            </label>
                        </div>  
                        
                        <div>
                            <div className={styles.info}>Demand calculation strategy</div>
                            <label className={styles.label}>
                                <RestaurantIcon className={styles.inputIcon}    />
                                <select 
                                    className={styles.input}
                                    name="strategy" onChange={(ev) => handleOtherDataChange("strategy", ev.target.value)}
                                >
                                    <option value="HarrisBenedict">Harriss Benedict basal demand</option>
                                    <option value="Miffin">Miffin basal demand</option>
                                    <option value="Complete">Complete demand</option>
                                </select>
                            </label>
                        </div>
                            <label className={styles.labelCheck}>
                                    {/* <RestaurantIcon className={styles.inputIcon2} /> */}
                                    <input
                                        className={styles.inputCheck}
                                        type="checkbox"
                                        name="isMan"
                                        value={otherData.isMan}
                                        onChange={(ev) => handleOtherDataChange("isMan", !otherData.isMan)}
                                        /> 
                                        <div className={styles.info}>Are you male? </div>
                                    
                            </label>
                        <div style={{textAlign: "right"}}>
                            <button className={styles.button} type="submit">calculate</button>
                            
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default CalculatorFormFunctional
