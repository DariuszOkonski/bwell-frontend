import React, { useEffect, useState } from "react";
import { Route, Redirect, useRouteMatch, useHistory } from "react-router-dom";
import EntryCreatorContextProvider from "../components/entrycreator/contexts/EntryCreatorContext";
import InfoDialog from "../components/reuseable/InfoDialog";
import { entry } from "../utilities/BackendRequests";
import UserService from "../utilities/UserService";
import { ACCESS_TOKEN } from "./constants";


const PrivateRoute = ({ component: Component, currentUser, authenticated,   ...rest }) => {
      
    const [loggedUser, setLoggedUser] = useState(currentUser)
    const [redirect, setRedirect] = useState(false)
    const history = useHistory();

    setTimeout(() => setRedirect(true), 3000);

    useEffect(() => {
        const refreshUser = async () => {
            
          if (localStorage.getItem(ACCESS_TOKEN)){
              const user = await UserService(true);  
              setLoggedUser(user)
            } else {
              setLoggedUser(null)
            }
          console.log(history)

        }
        refreshUser()
    }, [currentUser])

    return <Route

    {...rest}

    render={props => {
      return (loggedUser && loggedUser.isVerified) || history.location.search === "?unlogged=true" ? (
        <EntryCreatorContextProvider>
            <Component {...rest} {...props} />
        </EntryCreatorContextProvider>        
      
      ) : 
      // (redirect ? <Redirect
      //     to={{
      //       pathname: "/login",
      //       state: { from: props.location }
      //     }}/> : <h4>Loading user...</h4>  
      // )
      <InfoDialog redirectPath={history.location.pathname + "?unlogged=true"} info="As you are not authenticated you are able to only try this functionality but cannot post your data. Log in to make it possible."/>
    }
    }
  />
}
    

export default PrivateRoute;
