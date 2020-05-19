import React, {Component} from 'react';

class SimpleEvent extends Component{

    handleClick(){
        console.log("Test")
    }

    handleChange(){
        console.log("user changing an event!!")
    }

    handleSubmit(event){
        console.log("Form submitted!!")
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <button onClick={this.handleClick} className="btn">Click me!</button>
                    <input onChange={this.handleChange} type="text" placeholder="Enter some text!!"/>
                </form>
            </div>
        )
    }
}

export default SimpleEvent;