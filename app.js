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



// Check if the browser supports service workers
if ("serviceWorker" in navigator) {
    // If it does, add an event listener for the load event
  window.addEventListener("load", function() {
    // When the page is fully loaded, register the service worker
    navigator.serviceWorker
      .register("/serviceWorker.js")
      // If the registration is successful, log a message to the console
      .then(res => console.log("service worker registered"))
       // If the registration fails, log the error to the console
      .catch(err => console.log("service worker not registered", err));
  });
}
