import './App.css'

function App() {


  return (
    <div className="App">
      <div className='calculator'>      
        <div className='display' id="display"></div>
        <div className='buttons'> 
          <button id="clear" value="AC" className='wideBtn'>AC</button>
          <button id="divide" value="/">/</button> 
          <button id="multiply" value="*">x</button>     
          <button id="seven" value="7">7</button>
          <button id="eight" value="8">8</button>
          <button id="nine" value="9">9</button>
          <button id="subtract" value="-">-</button> 
          <button id="four" value="4">4</button>
          <button id="five" value="5">5</button>
          <button id="six" value="6">6</button>
          <button id="add" value="+">+</button> 
          <button id="one" value="1">1</button>
          <button id="two" value="2">2</button>
          <button id="three" value="3">3</button>
          <button id="equal" value="=" className='longerBtn'>=</button>
          <button id="zero" value="0" className='wideBtn'>0</button>
          <button id="decimal" value=".">.</button>
        </div>
      </div>
    </div>
  )
}

export default App
