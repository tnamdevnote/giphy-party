
const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const searchBtn = document.querySelector('#search');
const deleteBtn = document.querySelector('#remove');


async function getSearchGif(searchTerm) {
  const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=SOAltSiqBikDKqQ4uMljSyMdzIjm30wb&limit=5`);
  const imgURL = res.data.data[0].images.downsized_medium.url;
  appendGif(imgURL);
};

const appendGif = (imgURL) => {
  const gifCollection = document.querySelector('.collection');
  const gif = document.createElement('img');
  gif.setAttribute('class', 'collection__gif');
  gif.src = imgURL;
  gifCollection.append(gif);
  
  deleteBtn.addEventListener('click', () => {
    gifCollection.removeChild(gif);
  })
}

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getSearchGif(input.value.trim());
})



