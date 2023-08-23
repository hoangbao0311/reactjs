import React, { createContext, useState } from 'react'

const myContext = createContext();

const provider = myContext.Provider;

function context() {
    const [user, setUser] = useState({
        title: '', 
    })

    return (
    <div>context</div>
  )
}
