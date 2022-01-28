const city = 'New York City'

function logCitySkyline() {
  let  skyscraper = 'Empire State Building'
  return 'The stars over the ' + skyscraper + ' in ' + city
}
console.log(logCitySkyline())

let satellite = 'The Moon'
let galaxy = 'The Milky Way'
let stars = 'North Star'

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())

let lightWaves = "none"

function logVisibleLightWaves() {
  lightWaves = 'Moonlight'
  console.log(lightWaves)
}

logVisibleLightWaves()
console.log(lightWaves)

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = "Sirius"
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = "Sirius"
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars)

// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days = 0
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = event => {
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(event);
logTime(days);
