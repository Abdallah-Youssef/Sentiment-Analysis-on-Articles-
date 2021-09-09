const validUrl = require('valid-url');
import { fetchData } from './api';

export const populateDivs = ({ data }) => {
    document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
    document.getElementById("score_tag").innerHTML = `Score Tag: ${data.score_tag}`;
}


export const handleSubmit = async (e) => {
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

