// We want to generate the content for our page dynamically. 
// That way we could change out the images, add more or even change this so it could fetch from an api. 


// We start by getting the container element from the DOM. 
const container = document.querySelector(".container");
// define an array for our images
const flowers = [
  {
    name: "first one",
    image: "images/flower1.jpg"
  },
  {
    name: "second one",
    image: "images/flower2.jpg"
  },
  {
    name: "third one",
    image: "images/flower3.jpg"
  },
  {
    name: "fourth one",
    image: "images/flower4.jpg"
  },
  {
    name: "fifth one",
    image: "images/flower5.jpg"
  },
  {
    name: "sixth one",
    image: "images/flower6.jpg"
  },
];

//Define a function to display our flower images on our page
const showFlowers = () => {
  let output = "";
  // Loop over each flower object in the array
  flowers.forEach(
    ({ name, image }) =>
    // For each flower, add a card to the output string
      (output += `
              <div class="card">
                <img class="cardimage" src=${image} />
                <h1 class="cardtitle">${name}</h1>
              </div>
       `)
  );
  // Set the innerHTML of the container to the output string
  container.innerHTML = output;
};

// Add an event listener for the DOMContentLoaded event
// When the DOM is fully loaded, we run the showFlowers function
document.addEventListener("DOMContentLoaded", showFlowers);

