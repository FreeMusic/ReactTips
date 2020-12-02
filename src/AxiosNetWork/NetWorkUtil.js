import axios from "axios";
import {BASE_URL} from "./Config";
import storage from "../Storage/Storage";


/**
 * requestGet方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function requestGet(url, params) {
    /*拼接字符串*/
    return  GetJoinUrlRequest(url, params);
    // /*请求参数和请求头*/
    // return GetParamsAndHeader(url, params);
}

/*请求参数和请求头*/
function GetParamsAndHeader(url , params) {
    let userInfo = storage.get('UserInfo')
    let token = (JSON.stringify(userInfo) === 'null') ?
        '' : userInfo.token
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL() + url, {data:params,
            headers:{
                token:token,
            }}).then(data => {
            resolve(data);
        }).catch(error => {
            reject(error);
        })
    });
}

/*拼接字符串*/
function GetJoinUrlRequest(url , params) {
    let requestUrl =  makeParamters(params, url)
    console.log('Get请求连接：'+ requestUrl + '\n' + 'Get请求参数:' + params)
    return new Promise((resolve, reject) => {
        axios.get(requestUrl).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err.data)
        })
    });
}

/**
 * requestPost方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function requestPost(url, params) {
    let userInfo = storage.get('UserInfo')
    let token = (JSON.stringify(userInfo) === 'null') ?
        '' : userInfo.token
    let form_data = new FormData();
    makeFormData(params, form_data);
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL() + url,  form_data, {
            headers:{token:token}}
        ).then(data => {
            resolve(data);
        }).catch(error => {
            reject(error);
        })
    });
}

function makeFormData(obj, form_data) {
    var data = [];
    if (obj instanceof File) {
        data.push({key: '', value: obj});
    } else if (obj instanceof Array) {
        for (var j = 0, len = obj.length; j < len; j++) {
            var arr = makeFormData(obj[j]);
            for (var k = 0, l = arr.length; k < l; k++) {
                var key = !!form_data ? j + arr[k].key : '[' + j + ']' + arr[k].key;
                data.push({key: key, value: arr[k].value});
            }
        }
    } else if (typeof obj == 'object') {
        for (var j in obj) {
            var arr = makeFormData(obj[j]);
            for (var k = 0, l = arr.length; k < l; k++) {
                var key = !!form_data ? j + arr[k].key : '[' + j + ']' + arr[k].key;
                data.push({key: key, value: arr[k].value});
            }
        }
    } else {
        data.push({key: '', value: obj});
    }
    if (!!form_data) {
        // 封装
        for (var i = 0, len = data.length; i < len; i++) {
            form_data.append(data[i].key, data[i].value);
        }
    } else {
        return data;
    }
}

function makeParamters(params, url) {

    let string = (params) ? '?':''
    for (let paramsKey in params) {
        string = string + paramsKey + '=' + params[paramsKey] + '&'
    }
    let userInfo = storage.get('UserInfo')
    let requestUrl = (JSON.stringify(userInfo) === 'null') ?
        BASE_URL() + url + string :
        BASE_URL() + url + string + 'token='+userInfo.token

    return requestUrl;
}

// 对外暴露
export { requestPost, requestGet }
