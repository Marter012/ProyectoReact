import React, { UseSelector } from 'react'
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({ children, redirectTo }) => {

    const {currentUser} = UseSelector(state => state.user)
  return currentUser ? (
    children
  ) : (
    <Navigate to={redirectTo} state={{redirectedFromCheckout : true}} />
  )
}

export default ProtectedRoute