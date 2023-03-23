 import {useState} from 'react'

const buttonStyle = {
    width: "70px",
    border: "4px solid black",
    height: "30px",
    borderRadius: "10px"
}

const onOffStyle = {
    width: "32px",
    height: "23px",
    backgroundColor: "black",
    float: "right",
    cursor: "pointer",
    marginTop : "-1px"
}

const bankStyle = {
    backgroundColor: "grey",
    marginTop: "25px",
    width: "70px"
}

const PowerButton = () => {

    const [power, setPower] = useState(1)

    const toggleBtn = () => {
        setPower(!power)
    }

    return(
        <>
        <h4>ON/OFF</h4>
        <div className="power-button" style={buttonStyle}> 
            <div className="on-off" style={onOffStyle} onClick={toggleBtn}></div>
        </div>
        </>
    )
}

const BankButton = () => {
    return(
        <div className="bank-button" style={bankStyle}>
            <div className="on-off" style={onOffStyle}></div>
        </div>
    )
}

export  { PowerButton, BankButton }