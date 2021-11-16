import { ACCESS_TOKEN } from "../oauth2/constants";
import { getCurrentUser } from "../oauth2/util/APIUtils";
import { endpoints } from "./utilities";


export let currentUser;

const UserService = async (completeData=false) => {
    let defaultUser = await fetchDefaultUser()
    console.log("Summoning")
    if (localStorage.getItem(ACCESS_TOKEN))
    {
        try {
            defaultUser = await getCurrentUser()
        } catch (error) {
            console.log(error);
            return {
                id:0,
                isVerified: false
            }
        }
        defaultUser = defaultUser.user
        
    }
    console.log(defaultUser);
    
    if (completeData) return defaultUser;

    const loggedUser = defaultUser.id;

    return loggedUser;

}


export const Logout = () =>{
    localStorage.setItem(ACCESS_TOKEN, null)
    currentUser = null;
}

const fetchDefaultUser = async () => {
    const response = await fetch(`${endpoints.APIhost}${endpoints.APIusers}default`)
    const data = await response.json()

    return data
}
export default UserService;