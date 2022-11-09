import { ACCESS_TOKEN } from "../oauth2/constants";
import { getCurrentUser } from "../oauth2/util/APIUtils";
import { Ax } from "./interceptors";
import { endpoints } from "./utilities";


export let currentUser;

export const isUserAuthenticated = () => {
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
    const response = await Ax.get(`${endpoints.APIhost}${endpoints.APIusers}default`)
    const data = response.data

    return data
}
export default UserService;