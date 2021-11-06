import { endpoints } from "./utilities";

const UserService = async (completeData=false) => {
    const defaultUser = await fetchDefaultUser()

    if (completeData) return defaultUser;

    const loggedUser = defaultUser.id;

    return loggedUser;

}


const fetchDefaultUser = async () => {
    const response = await fetch(`${endpoints.APIhost}${endpoints.APIusers}/default`)
    const data = await response.json()

    return data
}
export default UserService;