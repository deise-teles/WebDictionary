const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const searchInput = document.querySelector('#search-input'),
 btnSearch = document.querySelector('#search'),
 result = document.querySelector('#result');


if (btnSearch){
  btnSearch.addEventListener('click', action);
  function action() {
    let word = searchInput.value;
    if(word === ''){
      alert('Please enter a word');
    } else{
      fetch(`${url}${word}`)
        .then((res) => res.json())
        .then((data) => {
          result.innerHTML = 
          `<p id="word">${word}</p>
          <p id="phonetic">${data[0].phonetics[0].text}</p>
          <p id="grammar">${data[0].meanings[0].partOfSpeech}</p>
          <p id="meaning">Meaning</p>
          <ul><li><p id="meaningWord" style="max-width: 650px; word-break: normal;">${data[0].meanings[0].definitions[0].definition}</p></li></ul>
        <div id="containerSynonym" style="max-width: 700px;min-width: 200px;word-break: normal;"><p id="synonym">Examples</p> </p> <p id="synonymWord">${data[0].meanings[0].definitions[0].example}</p></div>`

      })
    }
  }
}

// Função para mudar a fonte
const changeFont = () => {
    const fontSelector = document.querySelector('#font-selector');
    const selectedFont = fontSelector.value;
    const sampleText = document.querySelector('#sample-text');
    sampleText.style.fontFamily = selectedFont;
  }

//Função para mudar o tema
  const toggleTheme = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
  }
   // Function to toggle button
   const toggleButton = (button) => {
    button.classList.toggle('active');
  }
