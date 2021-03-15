//Adds a random book to the page.
function addRandomBook() {
  const books =
      ['The Games Maker by Pablo de Santis', 'Carve the Mark by Veronica Roth', 'Cinder by Marissa Meyer', 'Warcross by Marie Lu', 'Throne of Glass by Sarah J. Mass', 'Dragon Rider by Cornelia Funke', 'Eragon by Cristopher Paolini', 'Eon: Dragoneye Reborn by Alison Goodman', 'I am Number Four by Pittacus Lore'];

  // Pick a random greeting.
  const book = books[Math.floor(Math.random() * books.length)];

  // Add it to the page.
  const bookContainer = document.getElementById('book-container');
  bookContainer.innerText = book;
  //console.log(book);
}

async function showRandomSong(){
    const responseServ = await fetch('/rand-song');
    const respObj = await responseServ.json();
    const textRespObj = respObj[Math.floor(Math.random() * respObj.length)];
    const textResp = textRespObj.song + " - " + textRespObj.artist;
    const song = document.getElementById('song-container');
    song.innerText = textResp;
}

function requestTranslation() {
    const text = document.getElementById('content').innerHTML;
    const languageCode = document.getElementById('language').value;

    const resultContainer = document.getElementById('content');
    resultContainer.innerText = 'Loading...';

    const params = new URLSearchParams();
    params.append('text', text);
    params.append('languageCode', languageCode);

    fetch('/translate', {
        method: 'POST',
        body: params
    }).then(response => response.text())
    .then((translatedMessage) => {
        resultContainer.innerHTML = translatedMessage;
    });
}
