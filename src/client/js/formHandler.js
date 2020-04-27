const API_KEY = '52b18c4fff6a53e6809a84dc38f7d45e';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const postURL = ',us&appid=';
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    fetch(BASE_URL + '94117' + postURL + API_KEY).then(res =>{
        return res.json();
    }).then(data => {
        console.log(data)
        document.getElementById('results').innerHTML += `<br/>${data.name} : ${data.main.temp}`;
    })
}

export { handleSubmit }
