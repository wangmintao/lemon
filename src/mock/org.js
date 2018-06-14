import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const deptList = []
const userList = []
const deptCount = 10
const userCount = 100

for (let i = 0; i < deptCount; i++) {
  deptList.push(
    Mock.mock({
      id: '@increment',
      name: '部门-@natural(10,99)',
      isLeaf: false,
      type: 'dept',
      pId: 0
    })
  )
}

for (let i = 0; i < userCount; i++) {
  userList.push(
    Mock.mock({
      id: '@increment',
      name: '@cname()',
      'deptId|0-9': 0,
      type: 'user',
      isLeaf: true
    })
  )
}

export default {
  getList: config => {
    const { pId } = param2Obj(config.url)
    const id = parseInt(pId)
    console.log(id)
    const mockList = deptList.filter(dept => dept.pId === id)
    mockList.push(...userList.filter(user => user.deptId === id))
    return mockList
  }
}
