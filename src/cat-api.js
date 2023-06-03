const BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY =
  'live_vjPlfgW8bNcwsL1u3kO5cv6uFSIcEAHeKDVyLWAORzkfr2CgwIGnUaOg60KDOW0o';

function fetchBreeds() {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  return fetch(`${BREEDS_URL}?${params}`).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/${breedId}?api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };