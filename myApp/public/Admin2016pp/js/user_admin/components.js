import { Table } from 'antd';
import reqwest from 'reqwest';
import React,{findDOMNode,Component,PropTypes} from "react";

const columns = [{
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
    dataIndex:"login_recent"
},{
    title:'登录次数',
    dataIndex:'login_times'
},{
    title:'注册时间',
    dataIndex:'reg_time'
},{
    title:'操作',
    dataIndex:'do',
    render(text) {
        return <button href="#" className="table-remove" data-cid={text.cid}>{text.text}</button>;
    },
}];

const data = [];
for (let i = 0; i < 460; i++) {
    data.push({
        key: i,
        id:i,
        username: `李大嘴${i}`,
        phone:'15002114175',
        sex:'男',
        email:'1037359589@qq.com',
        login_recent: '2016-06-01',
        login_times:'10',
        reg_time:'2016-05-01',
        do:{
            text:'删除',
            cid:i
        }
    });
}

const pagination = {
    total: data.length,
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
            <Table columns={columns} dataSource={data} pagination={pagination} />
            </div>
        )
    }
});
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
                <Table columns={columns} dataSource={data} pagination={pagination} />
            </div>
        )
    }
});
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
                <Table columns={columns} dataSource={data} pagination={pagination} />
            </div>
        )
    }
});
var AllTable=React.createClass({
    render(){
        return(
            <div>
              <TableOne/>
              <TableTwo/>
              <TableThree/>
            </div>
        )
    }
});

ReactDOM.render(<AllTable/>
    , document.getElementById('table-data'));


//tab切换



