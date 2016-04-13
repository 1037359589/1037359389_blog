/**
 * Created by bll on 16/4/13.
 */
// 或者单独使用一个组件
var Datetime = require('rctui/Datetime');
var Form = require('rctui/Form');
var FormControl = require('rctui/FormControl');
var Icon = require('rctui/Icon');
var Input = require('rctui/Input');
var Button = require('rctui/Button');
var FormSubmit = require('rctui/FormSubmit');
require('rctui/themes/pure/datetime.less');
var App=React.createClass({
    render:function(){
        return(
            <div>
                <Form layout="aligned">
                    <FormControl type="text" label="用户名" name="username"  className="rct-hint-pop"
                                 grid={{width:1}} mult={true} min={2} max={6} />
                    <FormControl type="email" name="email"/>
                    <FormControl type="time" name="time"/>
                </Form>
            </div>
        )
    }
});
ReactDOM.render(
    <App/>,document.getElementById('main')
);