import React from "react";
import { Component } from "react";
import{Button} from './button.js';
export class Container extends Component{
    render(){
        return (<div id={this.props.iddiv}>
                <header id={this.props.id}>

                   <p id={this.props.titlefirst}>{this.props.title}</p> 
                   <p id={this.props.titlesecond}>{this.props.title1}</p>
                </header>
                <p id={this.props.preid}>
                    {this.props.paragrph}
                </p>
                <img id={this.props.idimg} src={this.props.img}></img>
                
                <Parent all={this.props.all} btn={this.props.btn} btn1={this.props.btn1} divchild={this.props.divchild} parentdiv={this.props.parentdiv}pa/>
                
            </div>)
    }   
}
class Parent extends Component{    
    state = {
        msg: "MIN",
    }
  
    handleCallback = (childData) =>{
        this.setState({msg: childData})
    }
  
    render() {
        const {msg} = this.state;
        return(
           <div id={this.props.all} >
             <h1 id={this.props.parentdiv}>{msg}</h1>
             <Child parentCallback = {this.handleCallback} btn={this.props.btn} btn1={this.props.btn1} divchild={this.props.divchild}/>    
           </div>
        );
    }
}
class Child extends Component {
    num=0;
    onTrigger = () => {
      this.props.parentCallback("Welcome to GFG");
    };
    Increase = () =>{
        this.num+=1
        if(this.num<10)
        this.props.parentCallback(this.num)
        else if(this.num==10){
            this.props.parentCallback("MAX")
            
        }
        if(this.num>10){
            alert("Cannot Vote")
            this.num=10
        }
    }
    Decrease =() =>{
        this.num-=1
        if(this.num>0)
        this.props.parentCallback(this.num)
        else if(this.num==0){
            this.props.parentCallback("MIN")
            
        }
        if(this.num<0){
            alert("Cannot Unvote")
            this.num=0
        }
    }
    render() {
      return (
        <div id={this.props.divchild}>
        <Button title ="click to Vote" id ={this.props.btn} handleclick={this.Increase}/>
        <Button title ="click to Unvote" id ={this.props.btn1}  handleclick={this.Decrease}/>
        </div>
      );
    }
}