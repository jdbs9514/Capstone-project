const hamburger = document.querySelector('.hamburger');
const xMarx = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  xMarx.classList.toggle('active');
});

const cross = document.querySelector('.cross');

cross.addEventListener('click', () => {
  xMarx.classList.remove('active');
});

const closeMenu = document.querySelector('.close-list');

closeMenu.addEventListener('click', () => {
  xMarx.classList.remove('active');
});

const speakers = document.getElementById('speakers');

// create an object //

const cards = [
  {
    image: './images/jaime.png',
    title: 'Jaime Bayly',
    subtitle: 'television host and writer',
    text: 'Wrote one of the most popular novels for the youth of Lima.',
  },

  {
    image: './images/vargas.png',
    title: 'Mario Vargas Llosa',
    subtitle: 'Peruvian writer',
    text: 'Popular Peruvian writer with years of transcendence.',
  },

  {
    image: './images/bryce.png',
    title: 'Alfredo Bryce Echenique',
    subtitle: 'Peruvian writer',
    text: '"Un mundo para Julius" popular novel and written by this excellent writer.',
  },

  {
    image: './images/adelia.png',
    title: 'Adélia Carvalho',
    subtitle: 'Portuguese writer',
    text: 'Guest of honor at this fair.',
  },
];

// create the speaker elements //

const featuredSpeakers = document.createElement('div');
featuredSpeakers.classList.add('position');
speakers.appendChild(featuredSpeakers);

for (let i = 0; i < cards.length; i += 1) {
  const container = document.createElement('div');
  container.classList.add('cards');
  featuredSpeakers.appendChild(container);

  const picture = document.createElement('img');
  picture.classList.add('img-speakers');
  picture.src = cards[i].image;
  picture.alt = 'images';
  container.appendChild(picture);

  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');
  container.appendChild(infoContainer);

  const cardName = document.createElement('h1');
  cardName.classList.add('img-name');
  cardName.textContent = cards[i].title;
  infoContainer.appendChild(cardName);

  const cardSub = document.createElement('h2');
  cardSub.classList.add('card-sub');
  cardSub.textContent = cards[i].subtitle;
  infoContainer.appendChild(cardSub);

  const infoCard = document.createElement('p');
  infoCard.classList.add('info');
  infoCard.textContent = cards[i].text;
  infoContainer.appendChild(infoCard);
}

const contButton = document.createElement('div');
contButton.classList.add('div-button');
speakers.appendChild(contButton);

const button = document.createElement('button');
button.classList.add('see');
button.type = "checkbox";
button.innerHTML = 'show more <i class="fa-solid fa-angle-down"></i>';
contButton.appendChild(button);


/*button.addEventListener('click', () => {
  button.classList.toggle('active');
  if(container => 5) {
    cards[0].cards[1].container;
  } else {
    button;
  }
});*/