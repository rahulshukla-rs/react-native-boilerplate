import * as React from 'react';

import Walktrough from './App/screens/guest/Walkthrough';
import GuestHome from './App/screens/guest/GuestHome';
import Main from './App/screens/Main';

const showRealApp = true; // true: walktrough complete
const loginUser = true; // true: User loggedin

function App()
{
  if(showRealApp)
  {
    if(loginUser)
    {
      return (<Main />);
    }
    else
    {
      return (<GuestHome />);
    }
  }
  else
  {
    return(<Walktrough />);
  }
  
}

export default App;