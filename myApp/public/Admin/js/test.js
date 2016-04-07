require("../css/style.css");
//var React=require("react");
//var ReactDOM=require("react-dom");
//var $=require('jquery');
var App=React.createClass({
    render:function(){
        return (
            <div>
                App
            </div>
        )
    }
});
var Container=React.createClass({
    render:function(){
        return (
            <div>
                <App/>
            </div>
        )
    }
});
ReactDOM.render(
    <Container/>,
    document.getElementById("main")
);
$("#main").text("你好啊 !!!");
console.log(1);