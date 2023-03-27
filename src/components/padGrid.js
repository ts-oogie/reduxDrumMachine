import PadBtn from './padButton'  
import useKey2Instrument from '../hooks/usekey2Instrument'
import {useSelector} from "react-redux"

const PadGrid = () => {

    const state = useSelector((state)=>state)
    const instrument = useKey2Instrument(state.key) // hook to take the key and return the instrument based on key type
                                                   
                                                    // Example : useKey2Instrument(key) where key is "Q" which is for the piccolo snare drum
    //*** const key = add hook for key based on bank useBank2Key(state.key, state.bank)
    //*** const display = add hook to toggle display of keys based on power. usePower2Key(state.power)

    const padGridStyle = {
        minWidth : "100%",
        //border: "1px solid red",
        display : "block", 
        minHeight: "100px"
    }
    
    const containerStyle = {
        width: "100%",
        minHeight: "100px",
        //border: "1px solid black", 
        margin : "0",
        position: "absolute",
        top : "33%",
        display : "block",
        msTransform : "translate(-50%, -50%)", 
        marginTop : "-50px"
    } 

    return(
        <div className="row" style={containerStyle}> 
            <div id="display"><h4>{instrument}</h4></div>
            <div className="flex-container" style={padGridStyle}>
                <PadBtn label="Q"/>
                <PadBtn label="W"/>
                <PadBtn label="E"/>
            </div>
            <div className="flex-container" style={padGridStyle}>
                <PadBtn label="A"/>
                <PadBtn label="S"/>
                <PadBtn label="D"/>
            </div>
            <div className="flex-container" style={padGridStyle}>
                <PadBtn label="Z"/>
                <PadBtn label="X"/>
                <PadBtn label="C"/>
            </div>
        </div>
    )
}

export default PadGrid