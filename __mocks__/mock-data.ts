import MockAdapter from 'axios-mock-adapter';
import { api as axios } from '@src/services/api.services';

export const mock = new MockAdapter(axios);

export const MOCK_MOVIES_LIST = [
  {
    backdrop:
      'https://wookie.codesubmit.io/static/backdrops/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    classification: '13+',
    director: 'Christopher Nolan',
    genres: ['Action', 'Crime', 'Drama'],
    id: 'd6822b7b-48bb-4b78-ad5e-9ba04c517ec8',
    imdb_rating: 9.0,
    length: '2h 32min',
    overview:
      'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
    poster:
      'https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg',
    released_on: '2008-07-16T00:00:00',
    slug: 'the-dark-knight-2008',
    title: 'The Dark Knight',
  },
  {
    backdrop:
      'https://wookie.codesubmit.io/static/backdrops/0bf56a90-5f7b-4108-9d0b-01ad77f0a310.jpg',
    cast: ['Malcolm McDowell', 'Patick Magee', 'Michael Bates'],
    classification: '18+',
    director: 'Stanley Kubrick',
    genres: ['Crime', 'Drama', 'Sci-Fi'],
    id: '0bf56a90-5f7b-4108-9d0b-01ad77f0a310',
    imdb_rating: 8.3,
    length: '2h 16min',
    overview:
      'Demonic gang-leader Alex goes on the spree of rape, mugging and murder with his pack of "droogs". But he\'s a boy who also likes Beethoven\'s Ninth and a bit of "the old in-out, in-out". He later finds himself at the mercy of the state and its brainwashing experiment designed to take violence off the streets.',
    poster:
      'https://wookie.codesubmit.io/static/posters/0bf56a90-5f7b-4108-9d0b-01ad77f0a310.jpg',
    released_on: '1971-12-18T00:00:00',
    slug: 'a-clockwork-orange-1971',
    title: 'A Clockwork Orange',
  },
];
