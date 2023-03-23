 import {useState, useEffect} from 'react' 


const PowerButton = () => { 

    const [power, setPower] = useState("on") 
    const [float, setFloat] = useState("left")

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
        if(power == "on"){
            setPower("off")
        }
        else if(power == "off"){
            setPower("on")
        } 
    } 
    
    useEffect(()=>{
        if(power == "on"){
            setFloat("left")
        }
        else if(power == "off"){
            setFloat("right")
        }
    })
    
    return(
        <> 
        <div className="power-button" style={buttonStyle} onClick={toggleBtn}> 
            <div className="on-off" style={onOffStyle} ></div>
        </div>
        <h4>Power : {power}</h4>
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