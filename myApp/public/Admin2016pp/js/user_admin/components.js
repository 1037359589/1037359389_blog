import { Table,Icon,Button,QueueAnim} from 'antd';
import reqwest from 'reqwest';
import React,{findDOMNode,Component,PropTypes} from "react";
import {BtnRemove,BtnPass,BtnRecover} from "../global/cus_components";
function getDate(){
    var myDate = new Date();
    return {
        y:myDate.getFullYear(), //获取完整的年份(4位,1970-????)
    }
}
function currentCreateTimeObj(){
    for(var i=1;i<=12;i++){
        var t={text: `${y}-${i}`, value: `${y}-${i}`};
        currentCreateTime.push(t)
    }
}
function getUnixTime(dateStr) {
    var newstr = dateStr.replace(/-/g,'/');
    var date =  new Date(newstr);
    var time_str = date.getTime().toString();
    return time_str.substr(0, 10);
}
var y=getDate().y,m=getDate().m,currentCreateTime=[];
currentCreateTimeObj();
var type=parseInt(window.location.search.split("=").pop());
const columns1 = [{
    title: '编号',
    dataIndex: 'id'
}, {
    title: '用户名',
    dataIndex: 'username',
}, {
    title: '联系方式',
    dataIndex: 'phone',
},{
    title:'性别',
    dataIndex:'sex',
},{
    title:'邮箱',
    dataIndex:'email'
},{
    title:'最近登录时间',
    dataIndex:"login_recent",
    filters: currentCreateTime,
    onFilter: (value, record) => {
        return record.login_recent.indexOf(value) === 0
    },
    sorter: (a, b) =>{
        return getUnixTime(a.login_recent)-getUnixTime(b.login_recent)
    }
},{
    title:'登录次数',
    dataIndex:'login_times',
    sorter: (a, b) =>{
        return a.login_times-b.login_times
    }
},{
    title:'注册时间',
    dataIndex:'reg_time',
    filters: currentCreateTime,
    onFilter: (value, record) => {
        return record.reg_time.indexOf(value) === 0
    },
    sorter: (a, b) =>{
        return getUnixTime(a.reg_time)-getUnixTime(b.reg_time)
    }
},{
    title:'文章数',
    dataIndex:'count_text',
    sorter: (a, b) => a.count_text - b.count_text,
},{
    title:'操作',
    dataIndex:'do',
    render(text) {
        return <BtnRemove cid={text.cid} ctype={type}>{text.remove}</BtnRemove>
    },
}];

const data1 = [];
for (let i = 1; i < 460; i++) {
    data1.push({
        key: i,
        id:i,
        username: `李大嘴${i}`,
        phone:'15002114175',
        sex:'男',
        email:'1037359589@qq.com',
        login_recent: '2016-6-1',
        login_times:i,
        reg_time:'2016-5-1',
        count_text:`${i}`,
        do:{
            remove:'删除',
            cid:i
        }
    });
}

const pagination = {
    total: data1.length,
    showSizeChanger: true,
    onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
    },
    onChange(current) {
        console.log('Current: ', current);
    }
};
var TableOne=React.createClass({
    getInitialState() {
        return {
            data: [],
            pagination: {},
            loading: false,
        };
    },
    //handleTableChange(pagination, filters, sorter) {
    //    const pager = this.state.pagination;
    //    pager.current = pagination.current;
    //    this.setState({
    //        pagination: pager,
    //    });
    //    this.fetch({
    //        pageSize: pagination.pageSize,
    //        currentPage: pagination.current,
    //        sortField: sorter.field,
    //        sortOrder: sorter.order,
    //        //...filters,
    //    });
    //},
    //fetch(params = {}) {
    //    console.log('请求参数：', params);
    //    this.setState({ loading: true });
    //    reqwest({
    //        url: '/components/table/demo/data.json',
    //        method: 'get',
    //        data: params,
    //        type: 'json',
    //        success: (result) => {
    //            const pagination = this.state.pagination;
    //            pagination.total = result.totalCount;
    //            this.setState({
    //                loading: false,
    //                data: result.data,
    //                pagination,
    //            });
    //        },
    //    });
    //},
    //componentDidMount() {
    //    this.fetch();
    //},
//<Table columns={columns} dataSource={data} pagination={pagination} loading={this.state.loading}
//       onChange={this.handleTableChange}/>
    render(){
        return(
            <div>
                <QueueAnim className="demo-content"  type={['right', 'left']}
                           ease={['easeOutQuart', 'easeInOutQuart']}>
                    <div key="a">
                      <Table columns={columns1} dataSource={data1} pagination={pagination} />
                    </div>
                </QueueAnim>
            </div>
        )
    }
});
const columns2 = [{
    title: '编号',
    dataIndex: 'id'
}, {
    title: '用户名',
    dataIndex: 'username',
}, {
    title: '联系方式',
    dataIndex: 'phone',
},{
    title:'性别',
    dataIndex:'sex',
},{
    title:'邮箱',
    dataIndex:'email'
},{
    title:'注册时间',
    dataIndex:'reg_time',
    filters: currentCreateTime,
    onFilter: (value, record) => {
        return record.reg_time.indexOf(value) === 0
    },
    sorter: (a, b) =>{
        return getUnixTime(a.reg_time)-getUnixTime(b.reg_time)
    }
},{
    title:'操作',
    dataIndex:'do',
    render(text) {
        return (
                <div>
                    <BtnPass cid={text.cid} ctype={type}>{text.pass}</BtnPass>
                    <BtnRemove cid={text.cid} ctype={type}>{text.remove}</BtnRemove>
                </div>
            )

    },
}];

const data2 = [];
for (let i = 0; i < 460; i++) {
    data2.push({
        key: i,
        id:i,
        username: `李大嘴${i}`,
        phone:'15002114175',
        sex:'男',
        email:'1037359589@qq.com',
        reg_time:'2016-5-1',
        do:{
            remove:'删除',
            pass:"通过",
            cid:i
        }
    });
}
var TableTwo=React.createClass({
    getInitialState() {
        return {
            data: [],
            pagination: {},
            loading: false,
        };
    },
    render(){
        return(
            <div>
                <QueueAnim className="demo-content"  type={['right', 'left']}
                           ease={['easeOutQuart', 'easeInOutQuart']}>
                    <div key="a">
                        <Table columns={columns2} dataSource={data2} pagination={pagination} />
                    </div>
                </QueueAnim>
            </div>
        )
    }
});
const columns3 = [{
    title: '编号',
    dataIndex: 'id'
}, {
    title: '用户名',
    dataIndex: 'username',
}, {
    title: '联系方式',
    dataIndex: 'phone',
},{
    title:'性别',
    dataIndex:'sex',
},{
    title:'邮箱',
    dataIndex:'email'
},{
    title:'注册时间',
    dataIndex:'reg_time',
    filters: currentCreateTime,
    onFilter: (value, record) => {
        return record.reg_time.indexOf(value) === 0
    },
    sorter: (a, b) =>{
        return getUnixTime(a.reg_time)-getUnixTime(b.reg_time)
    }
},{
    title:'操作',
    dataIndex:'do',
    render(text) {
        return (
            <div>
              <BtnRecover cid={text.cid} ctype={type}>{text.recover}</BtnRecover>
            </div>
        );
    },
}];

const data3 = [];
for (let i = 0; i < 460; i++) {
    data3.push({
        key: i,
        id:i,
        username: `李大嘴${i}`,
        phone:'15002114175',
        sex:'男',
        email:'1037359589@qq.com',
        reg_time:'2016-5-1',
        do:{
            recover:'恢复',
            cid:i
        }
    });
}
var TableThree=React.createClass({
    getInitialState() {
        return {
            data: [],
            pagination: {},
            loading: false,
        };
    },
    render(){
        return(
            <div>
                <QueueAnim className="demo-content"  type={['right', 'left']}
                           ease={['easeOutQuart', 'easeInOutQuart']}>
                    <div key="a">
                        <Table columns={columns3} dataSource={data3} pagination={pagination}/>
                    </div>
                </QueueAnim>
            </div>
        )
    }
});
var Tabs=React.createClass({
    showTabOne(){
        this.props.actions.toTabOne()
    },
    showTabTwo(){
        this.props.actions.toTabTwo()
    },
    showTabThree(){
        this.props.actions.toTabThree()
    },
    render(){
        var {actions,current_tab}=this.props,c1,c2,c3;
        switch (current_tab){
            case 1:
                c1='active';
                break;
            case 2:
                c2='active'
                break;
            case 3:
                c3='active'
                break;
        }
        return (
            <ul className="tabs clearfix">
                <li className={c1} onClick={this.showTabOne}>正常</li>
                <li className={c2} onClick={this.showTabTwo}>未审核</li>
                <li className={c3} onClick={this.showTabThree}>删除</li>
            </ul>
        )
    }
})
var AllTable=React.createClass({
    render(){
        var {actions,current_tab}=this.props,tab;
        switch (current_tab){
            case 1:
                tab= <TableOne/>;
                break;
            case 2:
                tab= <TableTwo/>;
                break;
            case 3:
                tab= <TableThree/>;
                break;
        }
        return(
            <div>
                <Tabs actions actions={actions} current_tab={current_tab}/>
                    {tab}
            </div>
        )
    }
});
export default AllTable;

//ReactDOM.render(<AllTable/>
//    , document.getElementById('table-data'));







