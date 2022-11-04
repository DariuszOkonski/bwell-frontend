import { ACCESS_TOKEN } from "../oauth2/constants";
import { getCurrentUser } from "../oauth2/util/APIUtils";
import { endpoints } from "./utilities";


export let currentUser;

export const isUserAuthenticated = () => {
    console.log(currentUser);
    return currentUser && currentUser.isVerified
};

const UserService = async (completeData=false) => {
    // let defaultUser = await fetchDefaultUser()
    let currentUserCompleteData = await getCurrentUser();

    let basicUserInfo = 
            currentUserCompleteData && currentUserCompleteData.user ? 
            currentUserCompleteData.user : 
            await fetchDefaultUser();

    currentUser = basicUserInfo;
    console.log(currentUser);
    if (completeData) return basicUserInfo;

    const loggedUser = basicUserInfo.id;

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