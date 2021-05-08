console.log("Let's get this party started!");

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  getSearchGif(input.value);
})

async function getSearchGif(searchTerm) {
  const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=SOAltSiqBikDKqQ4uMljSyMdzIjm30wb&limit=5`)
  console.log(res.data.data[1])
  const img = document.querySelector('#giphy');
  img.src = res.data.data[0].images.downsized_medium.url
};


