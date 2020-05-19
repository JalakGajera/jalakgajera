import React, {Component} from 'react';

class statePractice extends Component{
    constructor(){
        super();
        this.state={
            message:""
        }
    }

    handleEnter =(event)=>{
        this.setState({
            message: ""
        })
    }

    handleFocus=(event)=>{
        this.setState({
            message:"you agree to our terms of service by felling out the form"
        })
    }

    render =()=>{
        return(
            <div>
               
                <input onFocus={this.handleFocus} type="text"/>
                <h3 onMouseEnter={this.handleEnter}>{this.state.message}</h3>
                <img onLoad={this.imageLoad} src="file:///C:/Users/Jalak%20Gajera/Downloads/bright-spring-view-cameo-island-260nw-1048185397.webp"/>
            </div>
        )
    }
}

export default statePractice;