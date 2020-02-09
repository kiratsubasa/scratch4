import request from '@/utils/request';

/**
 * AEW Page API
 */

export function ListSlider(pid) {
    return request({
        url: '/api/projects/' + pid + '/sliders',
        method: 'get',
    });
}


export function GetSlider(pid, id) {
    return request({
        url: '/api/projects/' + pid + '/sliders/' + id,
        method: 'get',
    });
}
