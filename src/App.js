import React from 'react';

//================================== USE STATE HOOK ===========================================//
// import HookCounter from "./components/UseStateHook/HookCounter";
//import StateCounterPrev from './components/UseStateHook/StateCounterPrev'
// import StateWithObject from './components/UseStateHook/StateWithObject'
//import StateWithArray from './components/UseStateHook/StateWithArray'

//================================== USE EFFECT HOOK ==========================================//
//import ConditionalRun from './components/UseEffectHook/ConditionalRun'
//import IncorrectDependency from './components/UseEffectHook/IncorrectDependency'
//import FetchAllPosts from './components/UseEffectHook/FetchAllPosts'
//import FetchSinglePost from './components/UseEffectHook/FetchSinglePost'

//================================== USE CONTEXT HOOK ========================================//
import ComponentA from './components/UseContextHook/ComponentA'
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Sakun'}>
        <ChannelContext.Provider value={'Coding fun'}>
            <ComponentA/>
        </ChannelContext.Provider>
      </UserContext.Provider>
       
    </div>
  );
}

export default App;
