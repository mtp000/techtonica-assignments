/*
expand the content: Starting from a width of 0, every 100 milliseconds, 
increase to width by 10 pixels until the width is greater than the content's full width.
Starting from a width of 0: you should figure out how to do this quickly from what we did earlier
Every 100 milliseconds: Look up SetTimeout and SetInterval
increase to width by 10 pixels: Should be easy to do
until the width is greater than: If statement
content's full width: This one is new to me, 
I did some googling and found the .scrollWidth property that might work for you.  
So it'd look like if element.style.width < element.scrollWidth then...
*/


//when user clicks on contact, collaspe and expand the contact-content
//selects the element O in contact, selects element contact content
let contact = document.getElementById("contact-o");
let contactForm = document.getElementById("contact-content");
//when element o is clicked, display of contact content element is toggled between none and inline
// contact.addEventListener("click", function () {
//   if (contactForm.style.display === 'none') {
//     contactForm.style.display = 'inline';
//   } else {
//     contactForm.style.display = 'none';
//   }
// })


contact.addEventListener("click", function () {
  let interval = setInterval(increaseWidth, 25);

  function increaseWidth() {
    // Get the current width of the contactForm and parse it as an integer
    let currentWidth = parseInt(window.getComputedStyle(contactForm).width, 10);
    
    // Define the desired width and increment step
    let desiredWidth = contactForm.scrollWidth; // Example desired width
    let increment = 20; // Step to increase width
    
    // Increase the width until it reaches the desired width
    if (currentWidth < desiredWidth) {
      contactForm.style.width = (currentWidth + increment) + 'px';
    } else {
      clearInterval(interval); // Stop the interval once the desired width is reached
    }
  }
});