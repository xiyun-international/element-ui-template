import { assignWith, trim } from 'lodash';
import axios from 'axios';
import { Message } from 'element-ui';
import querystring from 'querystring';
import { getToken } from './token';

function message(option = {}) {
  option.customClass = '__on-top';
  return Message(option);
}

export default function(api, params) {
  // 请求默认配置项
  const config = {
    headers: { Authorization: getToken() },
    baseURL: process.env.VUE_APP_API,
    timeout: 10000,
  };

  // 过滤掉参数中的前后空格
  const trimParams = {};
  assignWith(trimParams, params, (objValue, srcValue) => trim(srcValue));

  // encode 参数
  const formParams = querystring.stringify(trimParams);

  return axios
    .post(api, formParams, config)
    .then(response => {
      let status = {};
      switch (response.data.code) {
        case 400:
        case 404:
        case 500:
        case 503:
          status = { status: response.data.code, message: response.data.message };
          break;

        default:
          return response.data;
      }
      // eslint-disable-next-line
      return Promise.reject({ response: status });
    })
    .catch(error => {
      message({ type: 'error', message: error.message || '接口异常' });
      throw new Error('接口异常');
    });
}
