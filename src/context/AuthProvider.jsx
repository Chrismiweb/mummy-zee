import React, { useEffect, useState, createContext } from 'react'

export const AuthContext = createContext();


export default function AuthProvider({children}) {
  const [admin, setAdmin] = useState(()=>{
    const name = localStorage.getItem("name")
    const token = localStorage.getItem("token");
    return name && token ? { name: name, token } : null;
  })
 
  useEffect(()=>{
    if(admin){
      localStorage.setItem("name", admin.name)
    }
    else{
      localStorage.removeItem("admin")
    }
  }, [admin])

  return (
    <AuthContext.Provider value={{admin, setAdmin}}>
        {children}
    </AuthContext.Provider>
  )
}
