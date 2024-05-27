import { useState } from "react";

export function useStoredState(storageKey, defalutState) {
    function getInititalState(){
        const storedState = localStorage.getItem(storageKey);
        return storedState ?? defalutState;
    }
     const[state, setState] = useState(getInititalState);
     function setAndStoreState(state){
        setState(state);
        localStorage.setItem(storageKey, state);
     }
     return [state, setAndStoreState];
}