import {useEffect, useState} from 'react' 
import {useSelector, useDispatch} from 'react-redux'


const SoundGen = () => {

    const state = useSelector((state)=>state)
    const [sound, setSound] = useState(null)

    useEffect(()=>{
        //when action for key is received, pass into hook returnSound
        setSound(ReturnSound(state.key))

    
    }, [state.key])

}

export default SoundGen