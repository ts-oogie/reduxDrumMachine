import {useState, useEffect} from 'react' 
import {togglePower} from '../actions/cartAction'
import { useSelector } from "react-redux"

const PowerButton = ({dispatch}) => { 

    const state = useSelector((state) => state)
 
    const [float, setFloat] = useState("left") //change css settings based on state.power
                                                //if state.power == "on", then make button float right
                                                //if state.power == "off", then make button float left

    const buttonStyle = {
        width: "70px",
        border: "4px solid black",
        height: "30px",
        borderRadius: "10px" 
    }
    
    let onOffStyle = {
        width: "32px",
        height: "23px",
        backgroundColor: "black",
        float: float,
        cursor: "pointer",
        marginTop : "-1px"
    }

    const toggleBtn = () => { 
        if(state.power == "on"){ 
            dispatch(togglePower("off"))
        }
        else if(state.power == "off"){ 
            dispatch(togglePower("on"))
        }  
    } 
    
    useEffect(()=>{
        console.log("State : " + state)
        if(state.power == "on"){
            setFloat("right")
        }
        else if(state.power == "off"){
            setFloat("left")
        }
    })
    
    return(
        <> 
        <div className="power-button" style={buttonStyle} onClick={toggleBtn}> 
            <div className="on-off" style={onOffStyle} ></div>
        </div>
        <h4>Power : {state.power}</h4>
        </>
    )
}

const BankButton = () => {

    const [bank, setBank] = useState(1) 
    const [float, setFloat] = useState("left")

    const bankStyle = {
        backgroundColor: "grey",
        marginTop: "25px",
        width: "70px"
    }     

    let onOffStyle = {
        width: "32px",
        height: "23px",
        backgroundColor: "black",
        float: float,
        cursor: "pointer",
        marginTop : "-1px"
    }

    useEffect(()=>{
        if(bank == 1){
            setFloat("left")
        }
        else{
            setFloat("right")
        }
    })

    const toggleBank = () => { 
        if(bank == 1){
            setBank(2)
        }
        else{
            setBank(1)
        }
    }

    return(
        <> 
        <div className="bank-button" style={bankStyle} onClick={toggleBank}>
            <div className="on-off" style={onOffStyle}></div>
        </div>
        <h4>Bank : {bank}</h4>
        </>
    )
}

export  { PowerButton, BankButton }