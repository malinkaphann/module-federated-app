import { METHODS } from "./constants";

const getAccessToken = () => {
    return 'abc-token';
}

export default async (method, url, params) => {
    let requestInfo = {
        mode: 'cors',
        cache: 'no-cache', 
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAccessToken()}`
        }
    };

    let body = {
        body: JSON.stringify(params)
    }

    const updateMethods = [ METHODS.POST, METHODS.PUT ];

    updateMethods.includes(method) ? requestInfo = {...requestInfo, body} : null;

    const response = await fetch(url, requestInfo);
    return response.json();
}
