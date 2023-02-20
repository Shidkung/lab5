import React from "react";
import { Component } from "react";

export class Img extends Component{
    render(){
        return <img id={this.props.idimg} src={this.props.img}></img>
    }
}