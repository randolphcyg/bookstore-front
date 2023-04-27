import axios from '../utils/axios'

export function addComment(params) {
    return axios.post('/comment', params);
}



export function addCommentReply(params) {
    return axios.post('/commentReply', params);
}