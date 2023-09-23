import sendRequest from './send-request';

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
