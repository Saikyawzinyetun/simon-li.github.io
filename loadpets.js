const pets = [
    {"name": "Charlie", "type": "Dog", "age": 3, "image": "puppy.jpg"},
    {"name": "Milo", "type": "Capybara", "age": 2, "image": "capybara.jpg"},
    {"name": "Miky", "type": "Mouse", "age": 2, "image": "hamster.jpg"},
    {"name": "Sunny", "type": "Cat", "age": 2, "image": "ginger cat.jpg"}
  ];
  
  function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById('pet-list');
    pets.forEach(pet => {
      const petItem = document.createElement('div');
      petItem.className = 'pet';
      petItem.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
        <button onclick="adoptPet()">Adopt Now</button>
      `;
      petList.appendChild(petItem);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadPets);
  console.log('Pets loaded successfully.');
  