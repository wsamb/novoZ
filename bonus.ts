import axios from 'axios';
import { Buffer } from 'buffer';

const epc = Date.now().toString();

const btoa = (text: string) => {
    return Buffer.from(text, 'binary').toString('base64');
};

const axios_client = axios.create({
    // baseURL: 'https://my-super-api.com',
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${btoa(epc)}`,
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json, text/plain, */*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST',
        'Access-Control-Allow-Credentials': 'true'
    }
});
