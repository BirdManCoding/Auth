import React, {useEffect} from "react"
import Router from "./Router"


import { useDispatch} from "react-redux"

import {getPosts} from "./actions/postActions"
import {userIsLoggedIn} from "./actions/userActions"



function App() {
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(getPosts())
    dispatch(userIsLoggedIn())
  }, [dispatch])

  return (
      <Router/>
  );
}

export default App;
