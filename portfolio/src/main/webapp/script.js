// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random book to the page.
 */
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
