const NET_TEST = 102;
const NET_PRO = 101;
const NET_LOCAL = 103;
const NET_TYPE = NET_TEST;//


function BASE_URL() {
    // return 'http://192.172.1.123:2333';http://192.172.1.166:2333
    return  NET_TYPE == NET_PRO ?
        'http://gfapi.tanwin.cn'
        :
        (
            NET_TYPE == NET_TEST ?
                'http://testgfapi.tanwin.cn:8086' //灰度
                // 'http://192.172.1.175:2333'
                :
                'http://192.172.1.221:2333'//本地
        );
};

export {BASE_URL}
