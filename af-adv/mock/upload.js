

export default [
    {
        url: '/upload/video',
        type: 'post',
        response: _ => {
            return {
                code: 20000,
                data: 'success'
            }
        }
    },

]
