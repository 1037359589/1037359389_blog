require("../css/style.css");
var React=require("react");
var ReactDOM=require("react-dom");
var App=React.createClass({
    render:function(){
        return (
            <div>
                App
            </div>
        )
    }
});
ReactDOM.render(
    <App/>,
    document.getElementById("main")
);
console.log(1);