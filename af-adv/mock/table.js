import Mock from 'mockjs'
//计划的数据
const data = Mock.mock({
  'items|20': [{
    plan_stop: true,
    plan_name: '@cname',
    plan_id: '@id',
    plan_state: {
      'name|1': ['审核不通过', '投放中', '不在投放时段', '已暂停', '已被广告组暂停', '广告计划超出预算', '广告组超出预算', '新建审核中', '已删除'],
      title: '@ctitle(3, 20)'
    },
    plan_group: '@cname',
    put_media: '@csentence(3, 7)',
    'put_area|2': ['北京', '上海', '广州'],
    'scene_orient|2': ['机场', '高铁', '酒店'],
    'operator_orient|2': ['移动', '联通', '电信'],
    'put_mode|1': ['快速投放', '均匀投放'],
    'put_rate|1': ['不控制频次', '自定义频次'],
    'cost_mode|1': ['CPR', 'CPC', 'CPD'],
    offer_price: '@integer(0, 50000)',
    put_time: ['@datetime', '@datetime'],
    consume: '@integer(0, 50000)',
    group_budget: '@integer(0, 50000)',
    day_budget: '@integer(0, 50000)',
    send_num: '@integer(0, 50000)',
    click_num: '@integer(0, 50000)',
    click_rate: '@float(0, 1000, 2, 2)',
    conversion_num: '@integer(0, 50000)',
    conversion_rate: '@float(0, 1000, 2, 2)'

  }]
})
//广告组的数据
const advdata = Mock.mock({
  'items|20': [{
    plan_stop: true,
    plan_name: '@cname',
    plan_id: '@id',
    plan_state: {
      'name|1': ['审核不通过', '投放中'],
      title: '@ctitle(3, 20)'
    },
    put_time: ['@datetime', '@datetime'],
    consume: '@integer(0, 50000)',
    group_budget: '@integer(0, 50000)',
    day_budget: '@integer(0, 50000)',
    send_num: '@integer(0, 50000)',
    click_num: '@integer(0, 50000)',
    click_rate: '@float(0, 10000000, 2, 2)',
    conversion_num: '@integer(0, 50000)',
    conversion_rate: '@float(0, 10000000, 2, 2)'

  }]
})
//创意的数据
const oridata = Mock.mock({
  'items|20': [{
    plan_stop: true,
    plan_name: '@cname',
    plan_id: '@id',
    ori_image: '@image("200x100", "#4A7BF7", "Hello")',
    adv_group: '@ctitle(3, 8)',
    belong_plan: '@ctitle(1, 3)',
    plan_state: {
      'name|1': ['审核不通过', '投放中'],
      title: '@ctitle(3, 20)'
    },
    put_media: '@csentence(3, 7)',
    put_time: ['@datetime', '@datetime'],
    consume: '@integer(0, 50000)',
    group_budget: '@integer(0, 50000)',
    day_budget: '@integer(0, 50000)',
    send_num: '@integer(0, 50000)',
    click_num: '@integer(0, 50000)',
    click_rate: '@float(0, 10000000, 2, 2)',
    conversion_num: '@integer(0, 50000)',
    conversion_rate: '@float(0, 10000000, 2, 2)',

    setting: '@csentence(3, 200)',
    link: '@url',
    image_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577264322857&di=cdab9445f283e40b363848b40a1dc393&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180216%2Fa4592884ca1d4990a2c6881d96fc6dbb.jpeg',
    video_url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
    exposure_link: '@url',
    click_link: '@url',

  }]
})

// 计划表格-日志页面table数据
const journalData = Mock.mock({
  'items|5': [{
    name: '@cname',
    obj_name: '@cname',
    type: {
      'name|1': ['修改', '删除', '添加', '查看'],
    },
    time: ['@datetime', '@datetime'],

  }]
})




export default [
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items,

        }
      }
    }
  },
  /********************************@auther by fs-2019.12.1*******************************/
  {
    type: 'get',
    url: '/table/planlist',
    response: config => {
      // const items = data.items
      // return {
      //   code: 20000,
      //   data: {
      //     total: items.length,
      //     items: items,
      //     pagenum:'4'

      //   }
      // }
      /**************************计划**********************************************/
      // 多个表格数据
      const { type, title, page = 1, limit = 20 } = config.query
      const items = data.items
      let mockList = items.filter(item => {
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })
      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))


      const advitems = advdata.items
      let advmockList = advitems.filter(item => {
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })
      const advpageList = advmockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))


      const oriitems = oridata.items
      let orimockList = oriitems.filter(item => {
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })
      const oripageList = orimockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))



      //单个表格数据
      // const {  type,title, page = 1, limit = 20 } = config.query
      // const items = data.items

      // let mockList = items.filter(item => {
      //   if (type && item.type !== type) return false
      //   if (title && item.title.indexOf(title) < 0) return false
      //   return true
      // })

      // const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))




      /*-------------------------------------------------------------*/
      return {
        code: 20000,
        // data: {
        //   total: mockList.length,
        //   items: pageList
        // }
        data: {
          total: mockList.length,
          items: pageList,
          advtotal: advmockList.length,
          advitems: advpageList,
          oritotal: orimockList.length,
          oriitems: oripageList
        }
      }



    }
  },
  //广告组-修改-上传数据
  {
    url: '/table/editdata',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  //广告组-添加广告组-上传数据
  {
    url: '/table/add',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  //计划-修改-上传数据
  {
    url: '/table/editplan',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  //计划-添加计划-上传数据
  {
    url: '/table/addplan',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  //计划表格-日志页面
  {
    url: '/table/Journallist',
    type: 'get',
    response: config => {
        return {
          code: 20000,
          data: {
            items: journalData.items
          }
        }
      }
  },

  //创意-修改-上传数据
  {
    url: '/table/editori',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

]
