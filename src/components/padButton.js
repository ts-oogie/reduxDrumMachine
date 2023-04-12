import {useDispatch } from 'react-redux'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {playKey} from '../actions/cartAction' 

import bass from '../assets/sounds/bass.wav'
import bass2 from '../assets/sounds/bass2.wav'
import bass3 from '../assets/sounds/bass3.wav'
import bass4 from '../assets/sounds/bass4.wav'
import beat from '../assets/sounds/beat.wav'
import bongo1 from '../assets/sounds/bongo1.wav'
import bongo2 from '../assets/sounds/bongo2.wav'
import congo from '../assets/sounds/congo.wav'
import crash from '../assets/sounds/crash.wav'
import metal from '../assets/sounds/metal.wav'
import orchestrahit from '../assets/sounds/orchestrahit.wav'
import plastic from '../assets/sounds/plastic.wav'
import reggae from '../assets/sounds/reggae.wav'
import snare from '../assets/sounds/snare.wav'
import snare2 from '../assets/sounds/snare2.wav'
import snare3 from '../assets/sounds/snare3.wav'
import tambourine from '../assets/sounds/tambourine.wav'
import timpani from '../assets/sounds/timpani.wav' 

const PadBtn = ({label}) => { 

    const state = useSelector((state)=>state)
    const [sound, setSound] = useState(null)
    const [thisLabel, setThisLabel] = useState(label)

    const audio = document.getElementById('audio')
        
    const dispatch = useDispatch()

    document.addEventListener("keydown", (e) => {
        e.stopImmediatePropagation()
        dispatch(playKey(e.key))   
    })

    function dispatchNote () {  
          
        //1. useEffect sets thisLabel on load
        //2. dispatchNote dispatches thisLabel to reducer which updates the state.key
        //3. useEffect is triggerred when state.key is updated, which calls setSound which sets sound
        //4. sound is set to the src of the element

        dispatch(playKey(thisLabel))   

    }    

    useEffect(()=>{    
        
        switch(state.key){
            case 'Q' : 
                setSound(bass)
                break
            case 'W' :
                setSound(bass2)
                break
            case 'E' :
                setSound(bass3)
                break
            case 'A' :
                setSound(bass4)
                break
            case 'S' :
                setSound(beat)
                break
            case 'D' :
                setSound(bongo1)
                break
            case 'Z' : 
                setSound(bongo2)
                break
            case 'X' :
                setSound(congo)
                break
            case 'C' :
                setSound(crash)
                break
            case 'q' :
                setSound(metal)
                break
            case 'w' :
                setSound(orchestrahit)
                break
            case 'e' :
                setSound(plastic)
                break
            case 'a' :
                setSound(reggae)
                break
            case 's' :
                setSound(snare)
                break
            case 'd' :
                setSound(snare2)
                break
            case 'z' :
                setSound(snare3)
                break
            case 'x' :
                setSound(tambourine)
                break
            case 'c' :
                setSound(timpani)
                break
        }
 
        if (state.bank == 1){
            const lc = label.toUpperCase()
            setThisLabel(lc) 
        }

        else {
            const uc = label.toLowerCase()
            setThisLabel(uc) 
        }  

        fetch(sound)
            .then(res => res.blob())
            .then(blob => {   
                audio.play()
            })
            .then(_ => {
                //AUDIO PLAYBACK STARTED  
            })
            .catch(e => {
                //audio playback failed
            })


    }, [state, label, sound])

    return(
        <div className="drum-pad" id={thisLabel} onClick={dispatchNote}>
            <h1>{thisLabel}</h1>
            <audio id="audio" className="clip" src={sound} type="audio/wav"></audio>
        </div>
    )
}

export default PadBtn