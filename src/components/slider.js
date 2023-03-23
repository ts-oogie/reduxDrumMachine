import {useState} from 'react' 

function Slider() { 

    const [inputVal, setInputVal] = useState(50)

    const slideContainerStyle = {
        width: "100%"
    } 

    const getVal = () => {
        let thisVal = document.getElementById('myRange').value
        setInputVal(thisVal)
    }   

    return (
        <>
        <section className="slidecontainer" style={slideContainerStyle}>
            <input type="range" min="1" max="100" value={inputVal} className="slider" id="myRange" onInput={getVal} />
        </section>
        <h4>Volume : {inputVal}</h4>
        </>
    )
}

export default Slider