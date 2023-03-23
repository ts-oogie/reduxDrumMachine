import PadBtn from './padButton'  

const PadGrid = () => {

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
                <PadBtn label="W"/>
                <PadBtn label="C"/>
            </div>
        </div>
    )
}

export default PadGrid