

import React, { useLayoutEffect } from 'react'
import { useState } from 'react';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';

const HistoryRouter = ({history, ...props}) => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location
      });      
      console.log(history);
      useLayoutEffect(() => history.listen(setState), [history]);

    return <Router {...props} 
    location={state.location} 
    navigationType={state.action} 
    navigator={history}
    history={history} />;
}

export default HistoryRouter