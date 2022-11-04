import { currentUser } from "../../utilities/UserService";
import { API_BASE_URL, ACCESS_TOKEN } from "../constants";

const request = options => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append("Authorization", "Bearer " + localStorage.getItem(ACCESS_TOKEN));
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options)
  .then(response =>{
    console.log(response)
    if (!response.ok){
      return Promise.reject("Couldn't get user");
    }
    return response.json()
    .then(json => json)
  })
  .catch(err => {
    console.log('User is not signed in.')
    return null;
  });
};

export function getCurrentUser() {
  // if (!localStorage.getItem(ACCESS_TOKEN)) {
  //   console.log("rejected");
  //   return Promise.reject("No access token set.");
  // }

  if (currentUser && !currentUser.isVerified) {
    return currentUser;
  }

  return request({
    url: API_BASE_URL + "/api/v1/users/profile",
    method: "GET"
  });
}
