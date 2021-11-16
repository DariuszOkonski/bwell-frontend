import { endpoints, isLocalhost } from "../../utilities/utilities";

export const API_BASE_URL = isLocalhost ? "http://localhost:8080" : "https://bwell-backend.herokuapp.com";

export const ACCESS_TOKEN = "accessToken";

export const OAUTH2_REDIRECT_URI = isLocalhost ? "http://localhost:3000/oauth2/redirect" : "https://bwell-frontend.herokuapp.com/oauth2/redirect";

export const GOOGLE_AUTH_URL = API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;
