import Logo  from '../circleSymbol.jpg'
import {PowerButton, BankButton } from './powerButton'
import Slider from './slider'



const ControlGrid = () => {

    const ctlGridStyle = {
        minWidth : "100%", 
        display : "block", 
        minHeight: "100px"
    }
    
    const containerStyle = {
        width: "100%",
        minHeight: "100px", 
        margin : "0",
        position: "absolute",
        top : "35%",
        display : "block",
        msTransform : "translate(-50%, -50%)", 
        marginTop : "-50px"
    } 
    
    const logoStyle = {
        width : "55px",
        marginTop : "20px",
        display : "inline-block",
        float: "right",
        marginRight: "20px",
        border: "4px solid black",
        paddingLeft: "2px",
        paddingBottom : "2px"
    }

    return(
        <>
        <img src={Logo} style={logoStyle}/> 
        <div className="row" style={containerStyle}>  
            <div className="flex-container" style={ctlGridStyle}>
                 <PowerButton />
            </div>
            <div className="flex-container" style={ctlGridStyle}>
                <Slider />
            </div>
            <div className="flex-container" style={ctlGridStyle}>
                <BankButton />
            </div>
        </div>
        </>
    )
}

export default ControlGrid