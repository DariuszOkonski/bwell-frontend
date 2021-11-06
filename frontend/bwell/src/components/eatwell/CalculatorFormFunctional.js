import RestaurantIcon from '@material-ui/icons/Restaurant';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { colors, viewportSize } from '../../utilities/utilities';
import { eatWell } from '../../utilities/BackendRequests';
import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import ModalEventButton from '../reuseable/ModalEventButton';
import Slider from './Slider';
import ActivitySlider from './Slider';
import zIndex from '@material-ui/core/styles/zIndex';

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
        hint: {
            position: "relative",
            display: "none",
            zIndex: "0"
            // height: "0.4rem"
        },
        showed: {
            right: "2rem",
            display: "block"
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
            margin: '0.2rem 0 0.2rem'
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
            padding: '0.35rem',
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
        },
        sliderContainer:{
            zIndex: "2",
            padding: "0.4rem 0",
            backgroundColor: 'white',
            // color: colors.buttonPrimary,
            // borderColor: 'transparent'
            // padding: "1rem"
        },
        flxe: {
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
        }
    })()

    const parseToVariable = (text) => {
        const toChange = text && text[0].toLowerCase() + text.slice(1) || text;
        return toChange.split(" ").join("")
    };
    


    const id = Math.floor(Math.random()*100)

    const theOrder = [
    {step: 1, max: 200, min: 0, name:"Age", hints: []},
    {step: 1, max: 300, min: 0, name:"Body Mass In Kg", hints: []},
    {step: 1, max: 1000, min: 0, name:"Height In Cm", hints: []},
    {step: 0.1, max: 2, min: 1, name:"Activity Ratio", hints: [
        "Your physical and overall activity - has impact on calories demand",
        "1.0-1.2 - Sitting work and no regular or small amount of activity",
        "1.3-1.5 - Regular physical activity - physical work or sitting work and sport up to 3 times a week",
        "1.6-1.8 - Daily intense physical activity or physical work and intense sport up to 5 times a week",
        "1.9-2.0 - Exhausting physical effort every day",
        "  + 0.1 - Should be counted for every second intense training in the week (e.g. you exercise 4 times then you increase there by 0.2)"
    ]},
    {step: 1, max: 100, min: 0, name:"Protein Percentage", hints: [
        "Percentage of protein in calories demand",
        "Recommended values 25-35 (can go up to 40 after consultation with expert)",
        "Default setting Protein-Carbs-Fat = 30-45-25"
    ]},
    {step: 1, max: 100, min: 0, name:"Fat Percentage", hints: [
        "Percentage of fat in calories demand",
        "Recommended values 25-30 (women should have it higher than man e.g. 30-35)",
        "Default setting Protein-Carbs-Fat = 30-45-25"
    ]},
    {step: 1, max: 100, min: 0,name:"Carbohydrates Percentage", hints: [
        "Percentage of carbohydrates in calories demand",
        "Recommended values 35-45",
        "Default setting Protein-Carbs-Fat = 30-45-25"
        ]},
]

    const strategyHints = [
        "Methods for calculation of calorical demand",
        "Harriss Benedict - basic caloric demand calculated with biological parameters",
        "Miffin - other basal calculation",
        "Complete Demand - the most complex calculation that sums up basal demand and calculates expected demand related with physical activity. Can be personalized by setting a goal",
    ]

    const goalHints = [
        "Define whether you would like to lose, gain or keep current weight. We do not recommend starting from 'Intense' programs",
        "Intense mass - 500 kcal overload - splitted mostly across protein and carbs",
        "Gain mass - 300 kcal overload - splitted mostly across protein and carbs",
        "Keep Current - neutral kcal income - if physical activity is on same level - this will allow you to keep current weight",
        "Gain mass - 300 kcal shortage - soft reduction program - mostly cutted from Carbohydrates",
        "Gain mass - 500 kcal shortage - itermediate reduction program - mostly cutted from Carbohydrates",
    ]
    const [numericalData, setNumericalData] = useState({
        age: 25,
        bodyMassInKg: 70,
        heightInCm: 171,
        activityRatio: null,
        proteinPercentage: null,
        fatPercentage: null,
        carbohydratesPercentage: null,
    })

    const [otherData, setOtherData] = useState({        
        goal: 'KeepCurrent',
        strategy: 'Complete',
        isMan: true,
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
    
    // const handleHintDisplay = (hints)

    const handleSubmit = async(evt) => {
        evt.preventDefault();
        const localNumerical = {...numericalData}
        localNumerical.fatPercentage = numericalData.fatPercentage && numericalData.fatPercentage / 100
        localNumerical.proteinPercentage = numericalData.proteinPercentage && numericalData.proteinPercentage / 100
        localNumerical.carbohydratesPercentage = numericalData.carbohydratesPercentage && numericalData.carbohydratesPercentage / 100
        const input = {id, ...localNumerical, ...otherData}
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
                                {isProvided || key.name == "Activity Ratio" ? <div className={styles.info}>{key.name}</div> : <></>}
                                <label className={styles.label}>
                                    
                                    {
                                    key.name == "Activity Ratio" ?
                                    <div className={styles.flxe}>
                                        
                                            <div className={ styles.input +" " + styles.sliderContainer}>

                                                <ActivitySlider/>

                                            </div>
                                                <div className={`${styles.hint} ${styles.alignRight}`}><ModalEventButton text="?" alternateContent={key.hints.map((hint, index) => <p style={{padding: "1rem", fontWeight: `${index==0 ? 600 : 400}`}}>{hint}</p>)}/></div>
                                    </div>
                                    :
                                    <>
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
                                    </>

                                }

                                    {key.hints.length > 0 && <div className={`${styles.hint} ${!numericalData[asVariable] && styles.showed}`}><ModalEventButton text="?" alternateContent={key.hints.map((hint, index) => <p style={{padding: "1rem", fontWeight: `${index==0 ? 600 : 400}`}}>{hint}</p>)}/></div>}
                                </label>
                            </div>
                        })}
                        
                        <div>
                        <div className={styles.info}>Your goal</div>

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
                                <div className={`${styles.hint} ${styles.showed}`}><ModalEventButton text="?" alternateContent={goalHints.map((hint, index) => <p style={{padding: "1rem", fontWeight: `${index==0 ? 600 : 400}`}}>{hint}</p>)}/></div>
                            
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
                                <div className={`${styles.hint} ${styles.showed}`}><ModalEventButton text="?" alternateContent={strategyHints.map((hint, index) => <p style={{padding: "1rem", fontWeight: `${index==0 ? 600 : 400}`}}>{hint}</p>)}/></div>
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
