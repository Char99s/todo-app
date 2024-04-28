import React, { useEffect, useState } from 'react'
import { TodoWrapper } from './todo/TodoWrapper.tsx'
import { MyAuthComponent } from './auth/Auth.tsx'
import { useFrappeAuth } from 'frappe-react-sdk'


export const ComponentTree = () => {
  {/* Component styling */}
  const styles = {
    logoutBtn: 'absolute right-0 top-0 bg-primary text-accent px-2.5 py-2 rounded-[10px] mt-2 mr-2'
  }
  
  {/* To identify current user and logout function */}
  const { currentUser, logout } = useFrappeAuth()

  {/* When user is logged in, render Todo components and logout button, else render login component */}
  return (
    <>
      {currentUser ? <div><TodoWrapper /> <button className={styles.logoutBtn} onClick={logout}>Logout</button> </div> : <MyAuthComponent /> 
       }
    </>
  )
}