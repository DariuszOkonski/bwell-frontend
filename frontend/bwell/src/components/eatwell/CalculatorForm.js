import React, { Component } from 'react';
import RestaurantIcon from '@material-ui/icons/Restaurant';

class CalculatorForm extends Component {
    state ={
        gender: '',
        age: '',
        height: '',
        weight: '',
        activity: '',
    }

    handleOnChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        // TODO sand date
        console.log(this.state)

        this.setState({
            gender: '',
            age: '',
            height: '',
            weight: '',
            activity: '',
        })
    }

    render() { 
        return (

            <div>
                <h2>CalculatorForm</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label>
                        <RestaurantIcon />
                        <input 
                            type="text"
                            name="gender"
                            placeholder="gender"
                            value={this.state.gender}
                            onChange={this.handleOnChange}
                        />
                    </label>
                    </div>

                    <div>
                    <label>
                        <RestaurantIcon />
                        <input 
                            type="number"
                            name="age"
                            placeholder="age"
                            value={this.state.age}
                            onChange={this.handleOnChange}
                        />
                    </label>
                    </div>

                    <div>
                    <label>
                        <RestaurantIcon />
                        <input 
                            type="number"
                            name="height"
                            placeholder="height"
                            value={this.state.height}
                            onChange={this.handleOnChange}
                            />
                    </label>
                    </div>

                    <div>
                    <label>
                        <RestaurantIcon />
                        <input 
                            type="number"
                            name="weight"
                            placeholder="weight"
                            value={this.state.weight}
                            onChange={this.handleOnChange}
                            />
                    </label>
                    </div>

                    <div>
                    <label>
                        <RestaurantIcon />
                        <select name="activity" onChange={this.handleOnChange}>
                            <option value="high">high</option>
                            <option value="medium">medium</option>
                            <option value="low">low</option>
                        </select>
                    </label>
                    </div>
                    
                    <input type="submit" value="calculate" />
                </form>
            </div>
        )
    }
}
 
export default CalculatorForm;