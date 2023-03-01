import React, { useState, useContext, useReducer, useEffect } from 'react'
import { generateQuestions } from './data/questions'

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const initialState = {
    data:generateQuestions(),
   }
  return (
    <AppContext.Provider
      value={{
        ...initialState
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }