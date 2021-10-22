import React, { Component } from 'react';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { colors, viewportSize } from '../../utilities/utilities';
import { eatWell } from '../../utilities/BackendRequests';

class CalculatorForm extends Component {
    state ={
        id: 0,
        age: null,
        bodyMassInKg: null,
        heightInCm: null,
        isMan: false,
        activityRatio: null,
        goal: 'KeepCurrent',
        proteinPercentage: null,
        fatPercentage: null,
        carbohydratesPercentage: null,
        strategy: 'Complete'
    }

    handleOnChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = async(evt) => {
        evt.preventDefault();

        const resp = await eatWell.fetchPostUserCalculatorData(this.state)

        console.log(resp);


        // this.setState({
        //     id: 0,
        //     age: null,
        //     bodyMassInKg: null,
        //     heightInCm: null,
        //     isMan: false,
        //     activityRatio: null,
        //     goal: 'KeepCurrent',
        //     proteinPercentage: null,
        //     fatPercentage: null,
        //     carbohydratesPercentage: null,
        // })
    }

    styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: "row",

                // [`@media (max-width: ${viewportSize.mobileL})`] : {
                //     flexDirection: 'column'
                //   }
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
            margin: '0.6rem 0'
        },
        inputIcon: {
            position: 'absolute',
            top: '5px',
            left: '5px',
            zIndex: '2',
            color: colors.buttonPrimary
        },
        input: {
            position: 'absolute',
            top: '0',
            left: '0',
            padding: '0.4rem',
            paddingRight: '0',
            paddingLeft: '30px',
            zIndex: '1',
            width: '100%',
            borderRadius: '0.5rem',
            border: `1px solid ${colors.textSecondary}`,
            color: colors.textPrimary,
        },
        button: {
            border: 'none',
            cursor: 'pointer',
            textTransform: 'capitalize',
            backgroundColor: colors.buttonPrimary,
            borderRadius: '2rem',
            color: colors.white,
            padding: '0.2rem 0.6rem',
            fontSize: '1rem',
            marginTop: '0.6rem'
            // "&:hover": {
            //     backgroundColor:'red',
            // }

            // '&:hover': {
            //     // backgroundColor: colors.buttonPrimaryHover,
            //     backgroundColor: 'red'
            // },
            // [`@media (max-width: ${viewportSize.mobileL})`] : {
            //     fontSize: '0.8rem'
            // }
        }
    }

    render() { 
        return (
            <div style={this.styles.container}>
                
                <div style={this.styles.iconContainer}>
                    <PostAddIcon style={this.styles.icon} />
                </div>
                
                <div style={this.styles.formContainer}>
                    <h2 style={this.styles.formHeader}>Create New Plan</h2>
                    <form style={{margin: '0 auto'}} onSubmit={this.handleSubmit}>
                        <div >
                            <label style={this.styles.label}>
                                <RestaurantIcon style={this.styles.inputIcon} />
                                <input 
                                    style={this.styles.input}
                                    type="number"
                                    name="age"
                                    placeholder="age"
                                    value={this.state.age}
                                    onChange={this.handleOnChange}
                                />
                            </label>
                        </div>

                        <div>
                            <label style={this.styles.label}>
                                <RestaurantIcon style={this.styles.inputIcon}    />
                                <input
                                    style={this.styles.input} 
                                    type="number"
                                    name="bodyMassInKg"
                                    placeholder="bodyMassInKg"
                                    value={this.state.bodyMassInKg}
                                    onChange={this.handleOnChange}
                                />
                            </label>
                        </div>

                        <div>
                            <label style={this.styles.label}>
                                <RestaurantIcon style={this.styles.inputIcon}    />
                                <input
                                    style={this.styles.input} 
                                    type="number"
                                    name="heightInCm"
                                    placeholder="heightInCm"
                                    value={this.state.heightInCm}
                                    onChange={this.handleOnChange}
                                    />
                            </label>
                        </div>


                        <div>
                            <label style={this.styles.label}>
                                <p>                                    
                                    is Man?
                                </p>
                                <input
                                    style={this.styles.input} 
                                    type="checkbox"
                                    name="isMan"
                                    value={this.state.isMan}
                                    onChange={this.handleOnChange}
                                    />
                            </label>
                        </div>


                        <div>
                            <label style={this.styles.label}>
                                <RestaurantIcon style={this.styles.inputIcon}    />
                                <input
                                    step='any'
                                    style={this.styles.input} 
                                    type="number"
                                    name="activityRatio"
                                    placeholder="activityRatio"
                                    value={this.state.activityRatio}
                                    onChange={this.handleOnChange}
                                    />
                            </label>
                        </div>

                        <div>
                            <label style={this.styles.label}>
                                <RestaurantIcon style={this.styles.inputIcon}    />
                                <select 
                                    style={this.styles.input}
                                    name="goal" onChange={this.handleOnChange}
                                >
                                    <option value="KeepCurrent">KeepCurrent</option>
                                    <option value="Reduction">Reduction</option>
                                    <option value="GainMass">GainMass</option>
                                    <option value="IntenseMass">IntenseMass</option>
                                    <option value="IntenseReduction">IntenseReduction</option>
                                </select>
                            </label>
                        </div>  



                        <div>
                            <label style={this.styles.label}>
                                <RestaurantIcon style={this.styles.inputIcon}    />
                                <input
                                    step='any'
                                    style={this.styles.input} 
                                    type="number"
                                    name="proteinPercentage"
                                    placeholder="proteinPercentage"
                                    value={this.state.proteinPercentage}
                                    onChange={this.handleOnChange}
                                    />
                            </label>
                        </div>

                        <div>
                            <label style={this.styles.label}>
                                <RestaurantIcon style={this.styles.inputIcon}    />
                                <input
                                    step='any'
                                    style={this.styles.input} 
                                    type="number"
                                    name="fatPercentage"
                                    placeholder="fatPercentage"
                                    value={this.state.fatPercentage}
                                    onChange={this.handleOnChange}
                                    />
                            </label>
                        </div>

                        <div>
                            <label style={this.styles.label}>
                                <RestaurantIcon style={this.styles.inputIcon}    />
                                <input
                                    step='any'
                                    style={this.styles.input} 
                                    type="number"
                                    name="carbohydratesPercentage"
                                    placeholder="carbohydratesPercentage"
                                    value={this.state.carbohydratesPercentage}
                                    onChange={this.handleOnChange}
                                    />
                            </label>
                        </div>



                    
                    <button style={this.styles.button} type="submit">calculate</button>
                </form>
            </div>
            </div>
        )
    }
}
 
export default CalculatorForm;