/**
 * 工具类
 */
import Vue from 'vue'
import CryptoJS from 'crypto-js'
import axios from 'axios'
let Base64 = require('js-base64').Base64
 export default {//加密
  
   encrypt(word, keyStr){ 

     
     keyStr = Base64.decode(keyStr);
     var key  = CryptoJS.enc.Utf8.parse(keyStr);//Latin1 w8m31+Yy/Nw6thPsMpO5fg==
     var srcs = CryptoJS.enc.Utf8.parse(word);
     var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
     return encrypted.toString();
   },
   //解密
   decrypt(word, keyStr){  
     keyStr = keyStr ? keyStr : 'abcdefgabcdefg12';
     var key  = CryptoJS.enc.Utf8.parse(keyStr);//Latin1 w8m31+Yy/Nw6thPsMpO5fg==
     var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
     return CryptoJS.enc.Utf8.stringify(decrypt).toString();
   }

  }
// POST 方法封装  (参数处理)
export const postRequest = (url, params) => {
  console.log("参数:"+params);
  return axios({
    method: 'POST',
    url: url,
    data:params,
    // 请求参数预处理
     // transformRequest: [function (data) {
     //   let ret = '{'
     //   for (let it in data) {
     //     ret += "'"+encodeURIComponent(it) + "':" + encodeURIComponent(data[it]) + ','
     //   }
     //   ret+='}';
     //   return ret
     // }],
    headers: {
      'Content-Type': 'application/json;charset=UTF-8;'
    }
  });
}

// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;　　//这里经常搭配token使用，将token值配置到tokenkey中，将tokenkey放在请求头中　　config.headers['Authorization'] = token;　　
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });