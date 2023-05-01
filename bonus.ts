import axios from 'axios';
import { Buffer } from 'buffer';
// I think we need to import Buffer

const epc = Date.now().toString();

// let's put Date.now() to string and specify input format

const btoa = (text: string) => {
    return Buffer.from(text, 'binary').toString('base64');
};
// names like btoa and epc might not be the best choice 
// what about using ones that would be clear at the first glance, 
// like stringifiedTimestamp and generateToken



const axios_client = axios.create({
    // baseURL: 'https://my-super-api.com',
    baseURL: 'http://localhost:3000',
    // we could add timeout 
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${btoa(epc)}`,
        // 'Access-Control-Allow-Origin': '*',
        // I think it would fail as we try tu use wildcard with allow access credentials (true)

        //'Accept': 'application/json, text/plain, */*',
        //Accept: */*
        // I think we should either specify, either accept any
        'Access-Control-Allow-Methods': 'GET, PUT, POST',
        'Access-Control-Allow-Credentials': 'true'
    }
});
