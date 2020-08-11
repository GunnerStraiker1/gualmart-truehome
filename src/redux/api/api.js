const baseUrl = "https://walmart.p.rapidapi.com/"

export const apiCall = (url, data, headers, method) => fetch(baseUrl + url, {body: data,method: method, headers: headers}).then(res => res.json())