console.log("Let's get this party started!");

async function getSearchGif() {
  const res = await axios.get('http://api.giphy.com/v1/gifs/search?q=hello&api_key=SOAltSiqBikDKqQ4uMljSyMdzIjm30wb&limit=5')
  console.log(res.data.data[0])
}