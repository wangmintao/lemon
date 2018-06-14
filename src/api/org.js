import request from '@/utils/request'

export function getOrg(pId) {
  return request({
    url: '/org/list',
    method: 'get',
    params: {
      pId
    }
  })
}
