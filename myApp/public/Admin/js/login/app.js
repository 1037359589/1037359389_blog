import React,{Component,PropTypes} from "react";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {render} from 'react-dom';
import LoginAll from "./Components";
import * as action from "./actions";
var App=React.createClass({
    render(){
        const {actions,register,forget}=this.props;
        return (
            <div>
                <div className="login-content">
                    <div className="login-form">
                        <LoginAll actions={actions} register={register} forget={forget}/>
                    </div>
                </div>
                <div></div>
            </div>
        );
    }
});
function handleNumber(state){
    return {
        register:state.register,
        forget:state.forget
    }
}
function mapActions(dispatch){
    return {
        actions:bindActionCreators(action,dispatch)
    }
}
export default connect(handleNumber,mapActions)(App);
