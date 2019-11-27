
import qs from 'qs';
import { logout } from '../services/global';
import { message } from "antd"
export default {

  namespace: 'global',

  state: {
    userInfo: {},
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname.startsWith("/")) {
          
        }
      });
    },
  },

  effects: {
    *logout({ payload }, { call, put }) {
      try {
        const { data } = yield call(logout, qs.parse({ ...payload }));
        if (data && data.status === 0) {
        } else {
          message.error(`${data.msg}`)
        }
      } catch (error) {
        message.error(`${error}`)
      }
    }
  },

  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
