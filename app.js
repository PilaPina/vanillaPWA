// We want to generate the content for our page dynamically. 
// That way we could change out the images, add more or even change this so it could fetch from an api. 


// We start by getting the container element from the DOM. 
const container = document.querySelector(".container");
// define an array for our images
const flowers = [
  {
    name: "Flower 1",
    image: "images/flower1.jpg",
    alt: "A bouquet of flowers"
  },
  {
    name: "Flower 2",
    image: "images/flower2.jpg",
    alt: "A close up of small white and pink flowers"
  },
  {
    name: "Flower 3",
    image: "images/flower3.jpg",
    alt: "White flowers with a green background"
  },
  {
    name: "Flower 4",
    image: "images/flower4.jpg",
    alt: "A close up of two flowers"
  },
  {
    name: "Flower 5",
    image: "images/flower5.jpg",
    alt: "Red roses with a black background"
  },
  {
    name: "Flower 6",
    image: "images/flower6.jpg",
    alt: "View from above of the hands of a person arranging a bouquet of flowers "
  },
];

//Define a function to display our flower images on our page
const showFlowers = () => {
  let output = "";
  // Loop over each flower object in the array
  flowers.forEach(
    ({ name, image, alt }) =>
    // For each flower, add a card to the output string
      (output += `
              <div class="card">
                <img class="cardimage" src=${image} alt=${alt ? alt : name} />
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

