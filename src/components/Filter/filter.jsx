import { nanoid } from "nanoid"
import { Component } from "react";
import css from "./filter.module.css"

export default class Filter extends Component {
    state = {
        input: ""
    }

    inputId = nanoid();

    handleInputChange = event => {
    
        this.setState({ input: event.currentTarget.value }); 
        
         this.props.onFilter(this.state);
    
    }

    render() {
        return (
    <div className={css.container}>
      <label className={css.label} htmlFor={this.inputId}>Find contacts by name</label>
      <input className={css.filterInput} type="text" name="filter" id={this.inputId} onChange={this.handleInputChange} />
    </div>
        )
    }
}