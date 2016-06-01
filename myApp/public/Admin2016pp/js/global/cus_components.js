/**
 * Created by bll on 16/6/1.
 */
import React,{findDOMNode,Component,PropTypes} from "react";
export var BtnPass=React.createClass({
    getInitialState(){
        return {
            cid:this.props.cid,
            type:this.props.ctype
        }
    },
    handleClick(){
        console.log(this.state.cid,this.state.type)
    },
    render(){
        return (
            <button onClick={this.handleClick} className="btn btn-pass">
                {this.props.children}
            </button>
        )
    }
});
export var BtnRemove=React.createClass({
    getInitialState(){
        return {
            cid:this.props.cid,
            type:this.props.ctype
        }
    },
    handleClick(){
        console.log(this.state.cid,this.state.type)
    },
    render(){
        return (
            <button onClick={this.handleClick} className="btn btn-remove">
                {this.props.children}
            </button>
        )
    }
});
export var BtnRecover=React.createClass({
    getInitialState(){
        return {
            cid:this.props.cid,
            type:this.props.ctype
        }
    },
    handleClick(){
        console.log(this.state.cid,this.state.type)
    },
    render(){
        return (
            <button onClick={this.handleClick} className="btn btn-recover">
                {this.props.children}
            </button>
        )
    }
});
export var BtnEdit=React.createClass({
    getInitialState(){
        return {
            cid:this.props.cid,
            type:this.props.ctype
        }
    },
    handleClick(){
        console.log(this.state.cid,this.state.type)
    },
    render(){
        return (
            <button onClick={this.handleClick} className="btn btn-edit">
                {this.props.children}
            </button>
        )
    }
});