import axios from '@/axios.js';

export default {
  //1、用户登录接口
  login: (params) => {
    return axios.get('/api/meituan/login',params);
  },
  //2、用户注册接口
  register: (params) => {
    return axios.get('/api/meituan/register',params);
  },
  //3.搜索框列表数据获取
  search: () => {
    return axios.get('/api/meituan/header/search.json');
  },
  //4.查询最近热门搜索
  searchHotWords: () => {
    return axios.get('/api/meituan/header/searchHotWords.json');
  },
  //5.首页左侧导航条 导航数据
  nav: () => {
    return axios.get('/api/meituan/index/nav.json');
  },
  //6.首页下方（有格调内容区数据获取）
  resultsByKeywords: () => {
    return axios.get('/api/meituan/index/resultsByKeywords.json');
  },
  //7.获取城市列表接口
  cityList: () => {
    return axios.get('/api/meituan/city/cityList.json');
  },
  //8.获取热门城市
  hot: () => {
    return axios.get('/api/meituan/city/hot.json');
  },
  //9.获取省份列表
  province: () => {
    return axios.get('/api/meituan/city/province.json');
  },
  //10. 最近搜索城市
  recents: () => {
    return axios.get('/api/meituan/city/recents.json');
  },
  //15.获取当前位置信息
  getPosition: () => {
    return axios.get('/api/meituan/city/getPosition.json')
  }
}

