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

const tags = [
  "Python", "Java", "C", "C++", "C#", "R", "JavaScript", 
  "TypeScript", "React", "React Native", "MATLAB", "HTML", 
  "CSS", "Git", "Vim", "VSCode", "Figma", "Microsoft Office", 
  "Flask", "Linux"
];

const radius = 150; // Radius of the 3D sphere
const tagCloud = document.getElementById("tag-cloud");
const tagElements = [];
let angleX = Math.PI / 1000; // Reduce the vertical rotation speed
let angleY = Math.PI / 500;  // Keep horizontal rotation speed as is

// Create and position tags in a spherical arrangement
tags.forEach((tag, i) => {
  const tagElement = document.createElement("div");
  tagElement.className = "tag";
  tagElement.textContent = tag;

  // Adjust `phi` and `theta` for a uniform spherical distribution
  const phi = Math.acos(1 - (2 * (i + 0.5)) / tags.length); // Center tags
  const theta = Math.PI * (1 + Math.sqrt(5)) * i; // Use golden ratio for distribution

  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);

  tagElement.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  tagElements.push({ element: tagElement, x, y, z });

  tagCloud.appendChild(tagElement);
});



function animate() {
  tagElements.forEach((tag) => {
    const { x, y, z, element } = tag;

    // Apply rotation transformations
    const newX = x * Math.cos(angleY) - z * Math.sin(angleY);
    const newZ = x * Math.sin(angleY) + z * Math.cos(angleY);
    const newY = y; // Prevent vertical over-rotation by keeping y unchanged

    tag.x = newX;
    tag.y = newY;
    tag.z = newZ;

    const scale = 200 / (200 + newZ); // Adjust scale based on depth
    const alpha = (newZ + radius) / (2 * radius); // Adjust opacity based on depth

    element.style.transform = `translate3d(${newX}px, ${newY}px, ${newZ}px) scale(${scale})`;
    element.style.opacity = alpha + 0.5;
  });

  requestAnimationFrame(animate);
}

animate();
