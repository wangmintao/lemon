import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'http://wx.qlogo.cn/mmopen/1DHIW5UW0xicwrqqpRjFtqoaSZ2oHiaZicvNTbiaomIlyEmVZatrcVETYpibj8t2a8IG54f3oXScZK4FThBU7GwnN7KY7dJRuIGXL/0',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  login: config => {
    const { username } = JSON.parse(config.body)
    console.log(userMap[username])
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
