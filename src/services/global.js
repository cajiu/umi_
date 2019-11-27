import request from '../utils/request';
import qs from 'qs';

export async function logout(params) {
  return request(`/crm/corp/overspec/list?${qs.stringify(params)}`);
}

export async function setWhiteList(params) {
  return request(`/crm/corp/overspec/white/set`, {
    method: 'post',
    body: JSON.stringify(params)
  });
}