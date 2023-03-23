import {useState} from 'react'

const slideContainerStyle = {
    width: "100%"
} 


function Slider() { 

    const [inputVal, setInputVal] = useState(50)

    const getVal = () => {
        let thisVal = document.getElementById('myRange').value
        setInputVal(thisVal)
    }   

    return (
        <section className="slidecontainer" style={slideContainerStyle}>
            <input type="range" min="1" max="100" value={inputVal} className="slider" id="myRange" onInput={getVal} />
        </section>
    )
}

export default Slider