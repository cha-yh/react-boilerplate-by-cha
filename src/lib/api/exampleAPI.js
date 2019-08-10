import axios from 'axios';

export const getDummyText = (postId) => {
    return axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    .then(res => {
        return res.data
    })
}