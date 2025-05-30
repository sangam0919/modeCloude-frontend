import React, { useState } from 'react'


const useInput = (initstate) => {
    const [value, setvalue] = useState(initstate);
    const setvaluehandler = (e) => {
        setvalue(e.target.value)
    }
    return [
        value, setvaluehandler
    ]
}

export default useInput