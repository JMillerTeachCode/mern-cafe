import { getToken } from './users-service';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};

    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  const backendResponse = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (backendResponse.ok) return backendResponse.json();
  throw new Error('Bad Request');
}

// export async function login(credentials) {
//   // Fetch uses an options object as a second arg to make requests
//   // other than basic GET requests, include data, headers, etc.
// const backendResponse = await fetch(`${BASE_URL}/login`, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   // Fetch requires data payloads to be stringified
//   // and assigned to a body property on the options object
//   body: JSON.stringify(userData),
// });

//   if (backendResponse.ok) {
//     return backendResponse.json();
//   } else {
//     throw new Error('Invalid Login');
//   }
// }
