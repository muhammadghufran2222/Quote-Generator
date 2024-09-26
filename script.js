const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.api-ninjas.com/v1/quotes";
const api_key = "+HxKnfJO8Gf5/8vgzsQRGQ==UEucvdsUhWD4guZ7";

async function getquote(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": api_key,
    },
  });
  var data = await response.json();
  quote.innerHTML = data[0].quote;
  author.innerHTML = data[0].author;
}
getquote(api_url);
