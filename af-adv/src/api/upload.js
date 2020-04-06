import request from '@/utils/request'

export function videoUpload() {
  return request({
    url: '/upload/video',
    method: 'post',
    
  })
}


