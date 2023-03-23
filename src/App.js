import './scss/dmStyle.scss';
import { Provider } from "react-redux"
import store from "./store" 
import PadGrid from './components/padGrid'
import ControlGrid from './components/controlGrid'

 
const dmStyle = {
  width : "50%",
  minHeight: "60%",
  display: "block",
  backgroundColor: "black",
  borderRadius: "20px",
  border: "solid 3px black"
}

const thisHeight = window.innerHeight*.6 + "px"

const padStyle = {
  width: "50%",
  height: thisHeight,
  position: "relative",
  float: "left",
  backgroundColor : "white",
  borderRadius: "20px" 
}

const controlStyle = {
  width: "50%",
  height: thisHeight,
  position: "relative",
  float: "right",
  backgroundColor : "white"
}

function App() {  
  return (
    <Provider store={store}> 
    <div className="App">   
      <div id="drum-machine" style={dmStyle}>
      <h1>Redux Machine</h1>
        <div id="pad-display" style={padStyle}>
           <PadGrid />
        </div>
        <div id="controls-display" style={controlStyle}>
            <ControlGrid />
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
