/**
 * Created by bll on 16/4/13.
 */



//require("../../css/index.css");
//require("../../css/login/login.css");
const ReactRouter = require('react-router');
let { Router, Route, Link, hashHistory } = ReactRouter;
import { Button, Form, Input, Row, Col,Checkbox,QueueAnim,Select,Menu,RadioGroup,Radio } from 'antd';
import React,{findDOMNode,Component,PropTypes} from "react";
//import classNames from 'classnames';
const createForm = Form.create;
const FormItem = Form.Item;

function noop() {
    return false;
}

var LoginForm = React.createClass({
    onHidden(){
        this.props.actions.toRegister();
    },
    isShowForget(){
        this.props.actions.toForget();
    },
    render() {
        const formItemLayout = {
            labelCol: { span: 0 },
            wrapperCol: { span: 24 }
        };
        return (
            <div>
                <div className="logo-p">
                    <header>管理员登陆</header>
                </div>
                <p>曹操来了!!</p>
                <QueueAnim component={Form} horizontal form={this.props.form}  delay={300}
                           className="ant-form ant-form-horizontal" type="bottom" leaveReverse>
                    <div key="a">
                        <Row>
                            <Col span="24">
                                <FormItem
                                    {...formItemLayout}>
                                    <Input type="password" onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                           className="input-cus" autoComplete="off" id="pass" placeholder="请输入管理员用户名"
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    <div key="b">
                        <Row>
                            <Col span="24">
                                <FormItem
                                    {...formItemLayout}
                                    >
                                    <Input  type="password"  className="input-cus"
                                                            onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                                            autoComplete="off" id="rePass" placeholder="请输入密码"
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    <div key="c">
                        <Row>
                            <Col span="24">
                                <Col span="24">
                                    <Button type="primary"  className="sub-cus">登陆</Button>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                    <div key="d">
                        <Row>
                            <Col span="12">
                                <label>
                                    <Checkbox defaultChecked={false}  />
                                    记住我
                                </label>
                            </Col>
                            <Col span="12">
                                <a href="javascript:;" className="link-one" onClick={this.isShowForget} >忘记密码?</a>
                            </Col>
                        </Row>
                    </div>
                    <div key="e">
                        <Row>
                            <Col span="24">
                                <Col span="24" >
                                    <Button type="ghost" className="sub-cus-2" onClick={this.onHidden}>创建账户</Button>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </QueueAnim>
            </div>
        );
    }
});

class RegisterFrom extends Component{

    constructor(props){
        super(props);
        this.onHidden=this.onHidden.bind(this);
    }

    onHidden(){
        this.props.actions.toRegister();
    }
    getValidateStatus(field) {
        const { isFieldValidating, getFieldError, getFieldValue } = this.props.form;

        if (isFieldValidating(field)) {
            return 'validating';
        } else if (!!getFieldError(field)) {
            return 'error';
        } else if (getFieldValue(field)) {
            return 'success';
        }
    }

    handleReset(e) {
        e.preventDefault();
        this.props.form.resetFields();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            console.log('Submit!!!');
            console.log(values);
        });
    }
    userExists(rule, value, callback) {
        if (!value) {
            callback();
        } else {
            setTimeout(() => {
                if (value === 'JasonWood') {
                    callback([new Error('抱歉，该用户名已被占用。')]);
                } else {
                    callback();
                }
            }, 800);
        }
    }

    checkPass(rule, value, callback) {
        const { validateFields } = this.props.form;
        if (value) {
            validateFields(['rePasswd']);
        }
        callback();
    }

    checkPass2(rule, value, callback) {
        const { getFieldValue } = this.props.form;
        if (value && value !== getFieldValue('passwd')) {
            callback('两次输入密码不一致！');
        } else {
            callback();
        }
    }
    componentDidMount(){
        //var input=document.getElementsByTagName('input')[0];
        var input=ReactDOM.findDOMNode(this.refs.inputCus);
        //var className=input.className;
        console.log(input);
        //input.className='ant-input ant-input-lg input-cus';
    }
    render(){
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
        const nameProps = getFieldProps('name', {
            rules: [
                { required: true, min: 5, message: '用户名至少为 5 个字符' },
                { validator: this.userExists },
            ],
        });
        const emailProps = getFieldProps('email', {
            validate: [{
                rules: [
                    { required: true },
                ],
                trigger: 'onBlur',
            }, {
                rules: [
                    {  required: true ,type: 'email', message: '请输入正确的邮箱地址' },
                ],
                trigger: ['onBlur', 'onChange'],
            }]
        });
        const passwdProps = getFieldProps('passwd', {
            rules: [
                { required: true, whitespace: true, message: '请填写密码' },
                { validator: this.checkPass.bind(this) },
            ],
        });
        const rePasswdProps = getFieldProps('rePasswd', {
            rules: [{
                required: true,
                whitespace: true,
                message: '请再次输入密码',
            }, {
                validator: this.checkPass2.bind(this),
            }],
        });
        const textareaProps = getFieldProps('textarea', {
            rules: [
                { required: true, message: '真的不打算写点什么吗？' },
            ],
        });
        const formItemLayout = {
            labelCol: { span: 0 },
            wrapperCol: { span: 24 },
        };
     return (
         <div>
             <div className="logo-p">
                 <header>管理员注册</header>
             </div>
             <p>如果,你是屌丝!!</p>
             <QueueAnim component={Form} horizontal form={this.props.form}  delay={300}
                        className="ant-form ant-form-horizontal" type="bottom" leaveReverse  form={this.props.form}>
                 <div key="a">
                     <Row>
                         <Col span="24">
                             <FormItem {...formItemLayout} hasFeedback
                              help={isFieldValidating('name') ? '校验中...' : (getFieldError('name') || []).join(', ')}>
                                 <Input onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop} ref="inputCuss"
                                         autoComplete="off" id="pass" placeholder="请输入管理员用户名"
                                     {...nameProps}
                                 />
                             </FormItem>
                         </Col>
                     </Row>
                 </div>
                 <div key="b">
                     <Row>
                         <Col span="24">
                             <FormItem {...formItemLayout}
                                 hasFeedback>
                                 <Input type="email" {...emailProps} ref="inputCus"
                                        autoComplete="off"  placeholder="请输入邮箱"
                                 />
                             </FormItem>
                         </Col>
                     </Row>
                 </div>
                 <div key="c">
                     <Row>
                         <Col span="24">
                             <FormItem {...formItemLayout} hasFeedback>
                                 <Input  type="password"  autoComplete="off" ref="inputCus"  {...passwdProps}
                                         onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                         autoComplete="off"  placeholder="请输入密码"
                                 />
                             </FormItem>
                         </Col>
                     </Row>
                 </div>
                 <div key="d">
                     <Row>
                         <Col span="24">
                             <FormItem {...formItemLayout} hasFeedback>
                                 <Input  type="password"  autoComplete="off" ref="inputCus"  {...rePasswdProps}
                                         onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                         autoComplete="off" placeholder="两次输入的密码保持一致"
                                 />
                             </FormItem>
                         </Col>
                     </Row>
                 </div>
                 <div key="f">
                     <Row>
                         <Col span="24">
                             <FormItem {...formItemLayout}>
                                 <Select defaultValue="普通管理员" className="cus-select">
                                     <Option value="jack">超级管理员</Option>
                                     <Option value="lucy">普通管理员</Option>
                                 </Select>
                             </FormItem>
                             </Col>
                     </Row>
                 </div>
                 <div key="g">
                     <Row>
                         <Col span="12">
                             <label>
                                 <Checkbox defaultChecked={false}  />
                                 我同意
                                 <a href="">LOL协议</a>
                             </label>
                         </Col>
                     </Row>
                 </div>
                 <div key="h">
                     <Row>
                         <Col span="7">
                             <Button type="ghost" className="sub-cus-2" onClick={this.onHidden}>返回登陆</Button>
                         </Col>
                         <Col span="7" offset="10">
                             <Button type="primary"  className="sub-cus" onClick={this.handleSubmit.bind(this)}>注册</Button>
                         </Col>
                     </Row>
                 </div>
             </QueueAnim>
         </div>
     )
    }
};
RegisterFrom = createForm()(RegisterFrom);

var ForgetPassword=React.createClass({
    onHidden(){
        this.props.actions.toForget();
    },
    render(){
        const formItemLayout = {
            labelCol: { span: 0 },
            wrapperCol: { span: 24 },
        };
        return (
            <div>
                <div className="logo-p">
                    <header>忘记密码??</header>
                </div>
                <p>什么记性!!</p>
                <QueueAnim component={Form} horizontal form={this.props.form}  delay={300}
                           className="ant-form ant-form-horizontal" type="bottom" leaveReverse>
                    <div key="a">
                        <Row>
                            <Col span="24">
                                <FormItem {...formItemLayout}>
                                    <Input type="password" onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                           className="input-cus" autoComplete="off" id="pass" placeholder="请输入邮箱"
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    <div key="b">
                        <Row>
                            <Col span="7">
                                <Button type="ghost" className="sub-cus-2" onClick={this.onHidden}>返回登陆</Button>
                            </Col>
                            <Col span="7" offset="10">
                                <Button type="primary"  className="sub-cus">发送</Button>
                            </Col>
                        </Row>
                    </div>
                </QueueAnim>
            </div>
        )
    }

});

var LoginAll=React.createClass({
    render(){
        var {actions,register,forget}=this.props;
        var formOne=register?<RegisterFrom actions={actions} />
            :<LoginForm actions={actions} />;
        var form=forget?<ForgetPassword actions={actions} />:formOne;
       return(
           <div>
               {form}
           </div>
       )
    }
});

export default LoginAll;



//ReactDOM.render(<App />, document.getElementById('app'));