var dog_generator = document.querySelector(".generate");

const BREEDS_URL = "https://dog.ceo/api/breeds/image/random"


async function handleBreedsFetch(){

  // fetch and change the promise into JSON
  var myPromise = await fetch(BREEDS_URL);
  var dogJSON = await myPromise.json();
  dogURL = dogJSON["message"];
  console.log(dogURL)

  // Create the dog HTML element
  var image= document.createElement("img");
  image.src = dogURL;
  image.alt = "cute dog image that was randomly generated"

  // resize
  image.style.height = "200px";
  image.style.width = "200px";
  
  // append to the body
  document.body.appendChild(image);

}

dog_generator.addEventListener("click", handleBreedsFetch);

