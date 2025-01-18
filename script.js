const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const content = document.querySelectorAll('.content, .about, .photo, .projects, .pictor, .Experience, .navbar-resume, .contact-container'); // Use querySelectorAll for multiple elements

//navbar mainly
// Add the Pokéball image dynamically
const pokeballImg = document.createElement('img');
pokeballImg.src = 'assets/pokeball.png';
pokeballImg.alt = 'Pokéball';
menuButton.appendChild(pokeballImg);

// Toggle menu and button state
menuButton.addEventListener('click', () => {
  const isMenuOpen = menu.classList.contains('open');

  if (isMenuOpen) {
    menu.classList.remove('open');
    menuButton.classList.remove('active');
    content.forEach(el => el.classList.remove('blurred')); // Apply blur effect to all content
  } else {
    menu.classList.add('open');
    menuButton.classList.add('active');
    content.forEach(el => el.classList.add('blurred')); // Apply blur effect to all content
  }
});


// experience mainly
const workItems = document.querySelectorAll('.work-list li');
const mainImage = document.getElementById('main-image');
const mainDescription = document.createElement('p'); // Create a paragraph element for the description

// Append the description element below the image
const experienceContent = document.querySelector('.experience-content');
experienceContent.appendChild(mainDescription);

// Add event listener to each work item
workItems.forEach((item) => {
  item.addEventListener('click', () => {
    const imageSrc = item.getAttribute('data-image');
    const description = item.getAttribute('data-description');

    mainImage.src = imageSrc;
    mainDescription.textContent = description; // Set the description text
  });
});

