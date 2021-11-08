import React from "react";
import { Route, Redirect } from "react-router-dom";
import EntryCreatorContextProvider from "../components/entrycreator/contexts/EntryCreatorContext";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    console.log( authenticated, rest)
    return <Route
    {...rest}
    render={props =>
      authenticated ? (
        <EntryCreatorContextProvider>
            <Component {...rest} {...props} />
        </EntryCreatorContextProvider>        
      
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
}
    

export default PrivateRoute;
