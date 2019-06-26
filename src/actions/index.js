import axios from 'axios';
// we'll need axios

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export function fetching() {
  return (dispatch) => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        dispatch({ type: FETCHING, payload: res.data });
      })
      .catch(error => {
        console.log(error.message);
      });
  }
}

export function success(id) {
  return {
    type: SUCCESS,
    payload: id,
  };
}

export function failure(id) {
  return {
    type: FAILURE,
    payload: id,
  };
}