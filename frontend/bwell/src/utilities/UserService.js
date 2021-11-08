import { ACCESS_TOKEN } from "../oauth2/constants";
import { getCurrentUser } from "../oauth2/util/APIUtils";
import { endpoints } from "./utilities";

const UserService = async (completeData=false) => {
    let defaultUser = await fetchDefaultUser()
    
    if (localStorage.getItem(ACCESS_TOKEN))
    {
        defaultUser = await getCurrentUser()
        defaultUser = defaultUser.user
    
    }
        
    
    if (completeData) return defaultUser;

    const loggedUser = defaultUser.id;

    return loggedUser;

}


const fetchDefaultUser = async () => {
    const response = await fetch(`${endpoints.APIhost}${endpoints.APIusers}default`)
    const data = await response.json()

    return data
}
export default UserService;