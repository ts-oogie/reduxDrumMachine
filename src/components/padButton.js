import {useDispatch } from 'react-redux'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {playKey} from '../actions/cartAction' 

const PadBtn = ({label}) => { 

    const state = useSelector((state)=>state)
    const [thisLabel, setThisLabel] = useState(label)

    const dispatch = useDispatch()

    const playNote = ()=>{
        dispatch(playKey(thisLabel))
    } 

    useEffect(()=>{
        if(state.bank == 1){
            setThisLabel(label.toUpperCase())
        }
        else{
            setThisLabel(label.toLowerCase())
        }
    })

    return(
        <div className="padbtn" id={thisLabel} onClick={playNote}><h1>{thisLabel}</h1></div>
    )
}

export default PadBtn