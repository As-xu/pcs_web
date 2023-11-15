import request from '@/utils/request'


// 登录方法
export function queryVideo(pageIndex, pageCount, queryParams) {
    const data = {
        "page_size": pageIndex,
        "page_index": pageCount,
        "query_params": queryParams,
    };
    console.log(queryParams)
    return request({
        url: '/video/query_all',
        method: 'post',
        data: data
    })
}