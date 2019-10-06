import axios from 'axios';

axios.defaults.baseURL = 'http://open.duyiedu.com/';
//添加请求拦截器
axios.interceptors.request.use(function (config) {
  //在发送请求之前做一些事情

  config.params = {
    ...config.params,
    'appkey': '13815447996_1547882450130'
  };
  return config;
},function (error) {
  //做一些有请求错误的事情
  return Promise .reject (error);
});

//添加响应拦截器
axios.interceptors.response.use (function (response) {
  //使用响应数据返回响应；
  if (response.data.status === 'success'){
    return response.data.data;
  }else {
    return response.data;
  }
},function (error) {
  //使用响应错误返回
  Promise.reject (error) ;
});

export default axios;
