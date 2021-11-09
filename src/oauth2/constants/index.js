import { endpoints } from "../../utilities/utilities";

export const API_BASE_URL = "https://bwell-backend.herokuapp.com/";

export const ACCESS_TOKEN = "accessToken";

export const OAUTH2_REDIRECT_URI = "https://bwell-frontend.herokuapp.com/oauth2/redirect";

export const GOOGLE_AUTH_URL = API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;
