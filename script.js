const english = document.querySelector('#english')
const shakespeare = document.querySelector('#shakespeare')
const btn = document.querySelector('.btn')


const url = 'https://api.funtranslations.com/translate/shakespeare.json?text=';

const getFullUrl = (text) => {
    return url+text;
}

const clickHandler = () => {
    fetch(getFullUrl(english.value))
        .then(response => response.json())
        .then(text => shakespeare.textContent = text.contents.translated)
        .catch(err => alert('Oops! Something went wrong!'))
}


btn.addEventListener('click', clickHandler);