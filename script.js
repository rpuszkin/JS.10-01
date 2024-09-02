document.getElementById("searchKitty").addEventListener("click", function () {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        const imgUrl = data[0].url;
        const imgElement = document.createElement("img");
        imgElement.src = imgUrl;
        imgElement.setAttribute("data-test", "img-kitty");

        const kittyContainer = document.getElementById("imgContainer");
        kittyContainer.appendChild(imgElement);
      }
    })
    .catch((error) => alert("Wystąpił błąd - " + error));
});
