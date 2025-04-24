const imgUrl = "https://lanciweb.github.io/demo/api/pictures/";
const customCardImg = document.querySelector("custom-card-img");
const customCardText = document.querySelector("custom-card-text");

axios.get(imgUrl).then((response) => {
  const urlContent = response.data.response;
});
