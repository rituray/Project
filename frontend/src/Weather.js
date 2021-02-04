import React, {Component} from 'react'
import axios from "axios";

export default class Weather extends Component{
    constructor(){
        super();
        this.state={
            weather :"not yet gotten"
        };
    }

    componentDidMount=()=>{
        axios.get("/getweather").then(response =>{
            console.log(response);
        });
    };
    render(){
        return(
            <div>
                <button>get weather</button>
                <h1>The weather is:{this.state.weather} </h1>
            </div>
        )
    }

}