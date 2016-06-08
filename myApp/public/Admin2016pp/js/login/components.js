/**
 * Created by bll on 16/4/13.
 */
import { Button, Form, Input, Row, Col,Checkbox,QueueAnim,Select,Menu,RadioGroup,Radio,Cascader } from 'antd';
import React,{findDOMNode,Component,PropTypes} from "react";
import reqwest from 'reqwest';
const createForm = Form.create;
const FormItem = Form.Item;
const InputGroup = Input.Group;
function noop() {
    return false;
}

//var LoginForm = React.createClass({
class LoginForm extends Component{
    constructor(props){
        super(props);
        this.onHidden=this.onHidden.bind(this);
        this.isShowForget=this.isShowForget.bind(this);
    }

    getValidateStatus(field) {
        const { isFieldValidating, getFieldError, getFieldValue } = this.props.form;
        console.log(this.props.form);
        if (isFieldValidating(field)) {
            return 'validating';
        } else if (!!getFieldError(field)) {
            return 'error';
        } else if (getFieldValue(field)) {
            return 'success';
        }
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
    onHidden(){
        this.props.actions.toRegister();
    }

    isShowForget(){
        this.props.actions.toForget();
    }
    render() {
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
        const nameProps = getFieldProps('username', {
            rules: [
                { required: true, min: 5, message: '请填写用户名!!' }
            ]
        });
        const passProps = getFieldProps('password', {
            rules: [
                { required: true,  min: 6,max:18,whitespace: true, message: '密码长度为6-18位!!'}
            ]
        });
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
                <QueueAnim component={Form} horizontal  delay={300}
                          type="bottom" leaveReverse form={this.props.form}
                >
                    <div key="a">
                        <Row>
                            <Col span="24">
                                <FormItem  help={isFieldValidating('username') ? '校验中...' : (getFieldError('username') || []).join(', ')}
                                    {...formItemLayout} hasFeedback>
                                    <Input  onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                           autoComplete="off"  placeholder="请输入管理员用户名" {...nameProps}
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    <div key="b">
                        <Row>
                            <Col span="24">
                                <FormItem help={isFieldValidating('password') ? '校验中...' : (getFieldError('password') || []).join(', ')}
                                    {...formItemLayout} hasFeedback>
                                    <Input  type="password" onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                        {...passProps}   autoComplete="off"  placeholder="请输入密码"
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    <div key="c">
                        <Row>
                            <Col span="24">
                                <Col span="24">
                                    <Button type="primary"  onClick={this.handleSubmit.bind(this)}>登陆</Button>
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
}
LoginForm = createForm()(LoginForm);

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
            this.fetch(values);
            console.log('Submit!!!');
        });
    }
    fetch(params){
        console.log(111);
        reqwest({
            url: 'http://localhost:3000/api/account_add_api',
            method: 'post',
            data:params,
            type: 'json'
        }).then(data => {
            console.log(data,12138);
        });
    }
    userExists(rule, value, callback) {
        console.log(value);
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
            console.log(value,getFieldValue('passwd'));
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

    validateCode(rule,value,callback){
        console.log(value);
        callback();
    }
    sendCode(){
        alert(1);
    }
    render(){
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
        const nameProps = getFieldProps('name', {
            rules: [
                { required: true, min: 5, message: '用户名至少5个字符' },
                { validator: this.userExists }
            ],
            trigger: ['onBlur', 'onChange'],
        });
        const phoneProps = getFieldProps('phone', {
            validate: [ {
                rules: [
                    { type: 'string',required: true,message: '请输入正确的手机号码' ,pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/},
                ],
                trigger: ['onBlur', 'onChange'],
            }]
        });
        const passwdProps = getFieldProps('passwd', {
            rules: [
                { required: true,  min: 6,max:18,whitespace: true, message: '密码长度为6-18位'},
                { validator: this.checkPass.bind(this)},
            ],
            trigger: ['onBlur', 'onChange']
        });
        const rePasswdProps = getFieldProps('rePasswd', {
            rules: [{
                required: true,
                whitespace: true,
                message: '两次密码不一致',
            }, {
                validator: this.checkPass2.bind(this)
            }],
            trigger: ['onBlur', 'onChange']
        });
        const codeProps = getFieldProps('code', {
            rules: [{
                required: true,
                message: '验证码不正确'
            }, {
                validator: this.validateCode.bind(this)
            }],
            trigger: ['onBlur', 'onChange'],
        });
        const formItemLayout = {
            labelCol: { span: 0 },
            wrapperCol: { span: 24 },
        };
        console.log(isFieldValidating('name'));


     return (
         <div>
             <div className="logo-p">
                 <header>管理员注册</header>
             </div>
             <p>如果,你是屌丝!!</p>
             <QueueAnim component={Form} horizontal  delay={300}
                        className="ant-form ant-form-horizontal" type="bottom" leaveReverse  form={this.props.form}>

                 <div key="a">
                     <Row>
                         <Col span="24">
                             <FormItem  {...formItemLayout}
                                 hasFeedback
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
                                 help={isFieldValidating('phone') ? '校验中...' : (getFieldError('phone') || []).join(', ')}
                                 hasFeedback>
                                 <Input type="text" {...phoneProps} ref="inputCus"
                                        autoComplete="off"  placeholder="请输入手机号码"
                                 />
                             </FormItem>
                         </Col>
                     </Row>
                 </div>
                 <div key="c">
                     <Row>
                         <Col>
                             <FormItem
                                 {...formItemLayout}
                                 hasFeedback>
                                 <div className="ant-search-input-wrapper">
                                     <InputGroup >
                                         <Input type="text" placeholder="请填写正确的验证码" className="input-code" {...codeProps}/>
                                         <div className="ant-input-group-wrap ">
                                             <Button type="primary" className="btn-send-code">发送验证码</Button>
                                         </div>
                                     </InputGroup>
                                 </div>
                             </FormItem>
                         </Col>
                     </Row>
                 </div>
                 <div key="d">
                     <Row>
                         <Col span="24">
                             <FormItem {...formItemLayout} hasFeedback
                                 help={isFieldValidating('passwd') ? '校验中...' : (getFieldError('passwd') || []).join(', ')}>
                                 <Input  type="password"  autoComplete="off" ref="inputCus"  {...passwdProps}
                                         onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop} autoComplete="off"
                                         placeholder="请输入密码"
                                 />
                             </FormItem>
                         </Col>
                     </Row>
                 </div>
                 <div key="e">
                     <Row>
                         <Col span="24">
                             <FormItem {...formItemLayout} hasFeedback
                                 help={isFieldValidating('rePasswd') ? '校验中...' : (getFieldError('rePasswd') || []).join(', ')}>
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
                         <Col span="12">
                             <label>
                                 <Checkbox defaultChecked={false}  />
                                 我同意
                                 <a href="">LOL协议</a>
                             </label>
                         </Col>
                     </Row>
                 </div>
                 <div key="g">
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
}
RegisterFrom = createForm()(RegisterFrom);

var ForgetPassword=React.createClass({
    onHidden(){
        this.props.actions.toForget();
    },
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
    },
    validateCode(rule,value,callback){
        console.log(value);
        callback();
    },
    render(){
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 0 },
            wrapperCol: { span: 24 },
        };
        const phoneProps = getFieldProps('phone', {
            validate: [ {
                rules: [
                    { type: 'string',required: true,message: '请输入正确的手机号码' ,pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/},
                ],
                trigger: ['onBlur', 'onChange'],
            }]
        });
        const codeProps = getFieldProps('code', {
            rules: [{
                required: true,
                whitespace: true,
                message: '验证码不正确',
            }, {
                validator: this.validateCode
            }],
            trigger: ['onBlur', 'onChange']
        });
        return (
            <div>
                <div className="logo-p">
                    <header>忘记密码??</header>
                </div>
                <p>什么记性!!</p>
                <QueueAnim component={Form} horizontal form={this.props.form}  delay={300}
                           className="ant-form ant-form-horizontal" type="bottom" leaveReverse>
                    <div key="b">
                        <Row>
                            <Col span="24">
                                <FormItem {...formItemLayout} hasFeedback>
                                    <Input type="text" {...phoneProps} ref="inputCus"
                                           autoComplete="off"  placeholder="请输入手机号码"
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    <div key="c">
                        <Row>
                            <Col>
                                <FormItem
                                    {...formItemLayout}
                                    hasFeedback>
                                    <div className="ant-search-input-wrapper">
                                        <InputGroup >
                                            <Input type="text" placeholder="请填写正确的验证码" className="input-code" {...codeProps}/>
                                            <div className="ant-input-group-wrap ">
                                                <Button type="primary" className="btn-send-code">发送验证码</Button>
                                            </div>
                                        </InputGroup>
                                    </div>
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    <div key="d">
                        <Row>
                            <Col span="7">
                                <Button type="ghost" className="sub-cus-2" onClick={this.onHidden}>返回登陆</Button>
                            </Col>
                            <Col span="7" offset="10">
                                <Button type="primary"  className="sub-cus" onClick={this.handleSubmit}>手机登陆</Button>
                            </Col>
                        </Row>
                    </div>
                </QueueAnim>
            </div>
        )
    }
});
ForgetPassword = createForm()(ForgetPassword);

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