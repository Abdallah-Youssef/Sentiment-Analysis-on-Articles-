const validUrl = require('valid-url');


const populateDivs = ({ data }) => {
    document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
    document.getElementById("score_tag").innerHTML = `Score Tag: ${data.score_tag}`;
}

const fetchData = async (url = '', articleUrl) => {
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
        alert(error);
        return error
    }
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const inputElement = document.getElementById('article-url');
    
    const url = inputElement.value
    console.log(url);

    if (Boolean(validUrl.isWebUri(url))) {
        const data = await fetchData('http://localhost:8081/analyse', url);
        populateDivs({ data });
    } else {
        alert(url + ' is an invalid URL');
    }
}

export default handleSubmit