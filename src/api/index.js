import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://snetmyapp.herokuapp.com',
    headers: {
        'Content-Type': 'application/json'
    },
})