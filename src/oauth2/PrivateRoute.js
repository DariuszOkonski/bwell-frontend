import React, { useEffect, useState } from "react";
import { Route, Redirect, useRouteMatch } from "react-router-dom";
import EntryCreatorContextProvider from "../components/entrycreator/contexts/EntryCreatorContext";
import { entry } from "../utilities/BackendRequests";
import UserService from "../utilities/UserService";
import { ACCESS_TOKEN } from "./constants";


const PrivateRoute = ({ component: Component, currentUser, authenticated,   ...rest }) => {
      
    const [loggedUser, setLoggedUser] = useState(currentUser)
    const [redirect, setRedirect] = useState(false)

    setTimeout(() => setRedirect(true), 3000);

    useEffect(() => {
        const refreshUser = async () => {
            
          if (localStorage.getItem(ACCESS_TOKEN)){
              const user = await UserService(true);  
              setLoggedUser(user)
            } else {
              setLoggedUser(null)
            }
          console.log(loggedUser)

        }
        refreshUser()
    }, [currentUser])

    return <Route

    {...rest}

    render={props => {
      console.log(loggedUser);
      return loggedUser && loggedUser.isVerified ? (
        <EntryCreatorContextProvider>
            <Component {...rest} {...props} />
        </EntryCreatorContextProvider>        
      
      ) : (redirect ? <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}/> : <h4>Loading user...</h4>  
      )
    }
    }
  />
}
    

export default PrivateRoute;
