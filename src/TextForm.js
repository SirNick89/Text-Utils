import React, {useState} from 'react'




export default function TextForm(props) {
const handleUp = () => {
   let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!","success");
}
const handleDown = () => {
   let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!","success");
}
const handleCl = () => {
   let newText = '';
    setText(newText);
    props.showAlert("Text has been cleared!","warning");
}
const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to Clipboard!","success");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra Spaces are removed!","success");
}

const handleOnChange = (event) => {
setText(event.target.value);
}

const[text,setText] = useState('');

  return (<>
    <div className='container' style={{ color : props.mode==='dark'?'white':'black'}}>
      <div className="mb-3 my-4">
        <h3>{props.heading}</h3>
  <label for="myBox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor : props.mode==='dark'?'#272a2e':'white',color : props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-1" onClick={handleUp} >Convert to UpperCase</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleDown}>Convert To LowerCase</button>
<button className="btn btn-danger mx-2 my-1" onClick={handleCl}>Clear Text</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{ color : props.mode==='dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} min. is the approximated reading time.</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Type something to get preview"}</p>
    </div>
  </>
  )
}
