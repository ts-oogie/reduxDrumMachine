import {useState, useEffect} from 'react' 
import {togglePower, selectBank} from '../actions/cartAction'
import { useSelector, useDispatch } from "react-redux"

const PowerButton = () => { 

    const state = useSelector((state) => state)
    const dispatch = useDispatch()
 
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
        marginTop : "-1px",
        marginRight: "-1px"
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

    const state = useSelector((state)=>state)
    const dispatch = useDispatch()

    //const [bank, setBank] = useState(1) - removed... added state object
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
        if(state.bank == 1){
            setFloat("left")
        }
        else{
            setFloat("right")
        }
    })

    const toggleBank = () => { 
        if(state.bank == 1){ 
            dispatch(selectBank(2))
        }
        else{
            dispatch(selectBank(1))
        }
    }

    return(
        <> 
        <div className="bank-button" style={bankStyle} onClick={toggleBank}>
            <div className="on-off" style={onOffStyle}></div>
        </div>
        <h4>Bank : {state.bank}</h4>
        </>
    )
}

export  { PowerButton, BankButton }