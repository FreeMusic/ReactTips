import React, { Component } from "react";
import logo from "../logo.svg";
import {requestPost, requestGet} from "./NetWorkUtil";
import {FindFinancialFlow, PWD_LOGIN} from "./API";
import storage from "../Storage/Storage";

class AxiosNetWork extends React.Component {


    componentDidMount () {
        let params = {'password': '1111111',
            'phone':'15168217852'}
        requestPost(PWD_LOGIN, params).then(result => {
            console.log(result)
            storage.set('UserInfo', result.data.data)
            this.requestOtherApi()
        }).catch(error => {
            console.log(error)
        })
    }

    requestOtherApi = () => {
        let params = {'projectId': '101276'}
        requestPost(FindFinancialFlow, params).then(data => {

        })
    }

    render() {
        return (
            <img src={logo} className="App-logo" alt="logo" />
        )
    }
}

export default AxiosNetWork;
