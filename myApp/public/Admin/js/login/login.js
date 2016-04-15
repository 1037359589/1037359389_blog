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

let LoginForm = React.createClass({
    getInitialState(){
        return {
            show:this.props.show,
            forget:this.props.forget
        }
    },
    onHidden(){
        var show=!this.state.show;
        this.setState({
            show:show
        });
        this.props.onChangeForm(show);
    },
    isShowForget(){
        var forget=!this.state.forget;
        this.setState({
            forget:forget
        });
        console.log(1231232);
        this.props.onChangeForget(forget);
    },
    render() {
        const formItemLayout = {
            labelCol: { span: 0 },
            wrapperCol: { span: 24 },
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
    getInitialState(){
        return {
            show:this.props.show
        }
    },
    onHidden(){
        var show=!this.state.show;
        this.setState({
            show:show
        });
        this.props.onChangeForm(show);
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
    getInitialState(){
        return {
            forget:this.props.forget
        }
    },
    onHidden(){
        var forget=!this.state.forget;
        this.setState({
            forget:forget
        });
        this.props.onChangeForm(forget);
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

var List=React.createClass({
    render(){
        return (
            <QueueAnim delay={300} >
                <div key="a">依次进场</div>
                <div key="b">依次进场</div>
                <div key="c">依次进场</div>
                <div key="d">依次进场</div>
                <div key="e">依次进场</div>
                <div key="f">依次进场</div>
            </QueueAnim>
        )
    }
});
var App=React.createClass({
    getInitialState(){
        return {
            show:false,
            forget:false
        }
    },
    onChangeForm (show){
        this.setState({
            show:show
        })
    },
    isShowForget(forget){
        console.log(111);
        this.setState({
            forget:forget
        })
    },
    render(){
        var formOne=this.state.show?<RegisterFrom onChangeForm={this.onChangeForm} show={this.state.show} />
            :<LoginForm onChangeForm={this.onChangeForm} show={this.state.show} onChangeForget={this.isShowForget}/>;
        var form=this.state.forget?<ForgetPassword forget={this.state.forget} onChangeForm={this.isShowForget}/>:formOne;
        return (
            <div>
                <div className="login-content">
                    <div className="login-form">
                        {form}
                    </div>
                </div>
                <div></div>
            </div>
        );
    }
});




ReactDOM.render(<App />, document.getElementById('app'));