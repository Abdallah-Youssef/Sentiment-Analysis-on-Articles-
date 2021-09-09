import 'babel-polyfill'

export const fetchData = async (url = '', articleUrl) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url : articleUrl})
        });

        return  await response.json();
    } catch (error) {
        return error
    }
};
