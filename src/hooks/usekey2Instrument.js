import {useEffect, useState} from 'react'

const useKey2Instrument = (key) => {

    const [instrument, setInstrument] = useState("Enter Instrument")

    useEffect(()=>{
        setInstrument("Instrument : " + key)
    }, [key])

    return instrument

}

export default useKey2Instrument