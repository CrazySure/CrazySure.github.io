import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
/********************************@auther by fs-2019.12.1*******************************/
//获取表格数据
export function getPlanList(query) {
  return request({
    method:'get',
    url:'/table/planlist',
    params:query
  })
}
//广告组-修改-上传数据
export function advEditDataTable(data) {
  return request({
    url: '/table/editdata',
    method: 'post',
    data
  })
}
//广告组-添加广告组-上传数据
export function addAdvTableData(data) {
  return request({
    url: '/table/add',
    method: 'post',
    data
  })
}

//计划-修改-上传数据
export function planEditDataTable(data) {
  return request({
    url: '/table/editplan',
    method: 'post',
    data
  })
}
//计划-添加计划-上传数据
export function addPlanTableData(data) {
  return request({
    url: '/table/addplan',
    method: 'post',
    data
  })
}

//计划-日志-获取操作日志的表格数据
export function getJournalDateTableData(query) {
  return request({
    method:'get',
    url:'/table/Journallist',
    params:query
  })
}

//计划-修改-上传数据
export function oriEditDataTable(data) {
  return request({
    url: '/table/editori',
    method: 'post',
    data
  })
}

