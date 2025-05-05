// variabili generali
const imgUrl = "https://lanciweb.github.io/demo/api/pictures/";
const customRow = document.querySelector(".custom-row");
const customCard = document.querySelector(".custom-card");
const overlay = document.querySelector(".overlay");
const overlayImg = document.querySelector(".overlay-img");
const overlayCloseButton = document.querySelector(".overlay-close-button");

// logica creazione card

axios.get(imgUrl).then((response) => {
  const urlContent = response.data;
  console.log(urlContent);
  let emptyCard = ``;
  urlContent.forEach((element) => {
    emptyCard += `<div class="custom-col-1-3">
            <div class="custom-card">
              <div class="custom-card-img"><img src="${element.url}" alt="immagine ${element.id}"></div>
              <div class="custom-card-body">
                <h5 class="custom-card-title">${element.title}</h5>
                <p class="custom-card-text">${element.date}
                </p>
              </div>
              <div class="nail"></div>
            </div>
          </div>`;
  });
  customRow.innerHTML = emptyCard;

  // gestione ingrandimento card

  document.querySelectorAll(".custom-card-img img").forEach((cardImg) => {
    cardImg.addEventListener("click", () => {
      overlay.style.display = "flex";
      overlayImg.src = cardImg.src;
    });
  });
});

overlayCloseButton.addEventListener("click", () => {
  overlay.style.display = "none";
});
