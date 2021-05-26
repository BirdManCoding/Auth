import React, {useReducer} from 'react'

import AppBar from "./appBar/Bar"



import SideDrawer from "./sideDrawer/SideDrawer"



export const ToggleContext = React.createContext();

const initialState = false
const reducer = (state, action) => {
    switch(action){
        case "OPEN":
            return true
        case "CLOSE":
            return false    
        default: 
            return state    
    }
}


export default function Navbar() {
    const [toggleState, dispatch] = useReducer(reducer, initialState)

    return (
        <ToggleContext.Provider value={{toggleState,  dispatch}}>
            <AppBar/>
            <SideDrawer />
        </ToggleContext.Provider>
    )
}
