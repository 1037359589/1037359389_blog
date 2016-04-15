/**
 * Created by bll on 16/4/13.
 */



//require("../../css/index.css");
//require("../../css/login/login.css");
const ReactRouter = require('react-router');
let { Router, Route, Link, hashHistory } = ReactRouter;
import { Button, Form, Input, Row, Col,Checkbox,QueueAnim,Select,Menu,RadioGroup,Radio } from 'antd';
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

var RegisterFrom= React.createClass({
    onHidden(){
        this.props.actions.toRegister();
    },
    render(){
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
                        className="ant-form ant-form-horizontal" type="bottom" leaveReverse>
                 <div key="a">
                     <Row>
                         <Col span="24">
                             <FormItem {...formItemLayout}>
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
                             <FormItem {...formItemLayout}>
                                 <Input type="password" onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                        className="input-cus" autoComplete="off" id="pass" placeholder="请输入邮箱"
                                 />
                             </FormItem>
                         </Col>
                     </Row>
                 </div>
                 <div key="c">
                     <Row>
                         <Col span="24">
                             <FormItem {...formItemLayout}>
                                 <Input  type="password"  className="input-cus"
                                         onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                         autoComplete="off" id="rePass" placeholder="请输入密码"
                                 />
                             </FormItem>
                         </Col>
                     </Row>
                 </div>
                 <div key="d">
                     <Row>
                         <Col span="24">
                             <FormItem {...formItemLayout}>
                                 <Input  type="password"  className="input-cus"
                                         onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                         autoComplete="off" id="rePass" placeholder="确认密码"
                                 />
                             </FormItem>
                         </Col>
                     </Row>
                 </div>
                 <div key="f">
                     <Row>
                         <Col span="24">
                             <FormItem {...formItemLayout}>
                                 <Input  type="password"  className="input-cus"
                                         onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                                         autoComplete="off" id="rePass" placeholder="请输入密码"
                                 />
                             </FormItem>
                         </Col>
                     </Row>
                 </div>
                 <div key="g">
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
                 <div key="h">
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
                 <div key="i">
                     <Row>
                         <Col span="7">
                             <Button type="ghost" className="sub-cus-2" onClick={this.onHidden}>返回登陆</Button>
                         </Col>
                         <Col span="7" offset="10">
                             <Button type="primary"  className="sub-cus">注册</Button>
                         </Col>
                     </Row>
                 </div>
             </QueueAnim>
         </div>
     )
    }
});

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