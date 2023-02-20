import React from "react";
import { Component } from "react";

export class Button extends Component{
    render(){
        return (<button id={this.props.id} onClick={this.props.handleclick}>{this.props.title}</button>)
    }
}