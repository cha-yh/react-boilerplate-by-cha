import axios from 'axios';

export const getSomething = (postId) => {
    // return axios({
    //     method: 'get',
    //     url: `https://jsonplaceholder.typicode.com/posts/${postId}`
    // })
    // .then((res) => {
    //     console.log('res :', res);
    //     return res.data
    // })
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => {return res.data})
}