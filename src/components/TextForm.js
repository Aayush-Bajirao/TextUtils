//Try making placeholder as enter text here and taking just value from the user
//==> solution reached by just emptying the value set on variable 'set'
//making more precise counting for time to read, word count and charachter count
import React,{useState} from 'react'
import PropTypes from 'prop-types';


 
export default function TextForm(props) {
    const handleUpClick =() =>{                            //for changing text to setText as Uppercase 
        //console.log("handleUpClick fuction is fired." + text);
        let newText = text.toUpperCase();
        setText(newText);   
        props.showAlert("Uppercase button has been enabled","warning");     
    }
    const handleLoClick =() =>{                            //for changing text to setText as Lowercase   
        //console.log("handleLoClick fuction is fired." + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase button has been enabled","success");  
    }

    const handleClear =() =>{                            //for changing text to setText as nothing
        let newText = '';
        setText(newText);
        props.showAlert("Clear button has been enabled","danger");          
    }

    const handleCapitalize =() =>{                            //for changing text to setText as nothing
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);        
    }

    const handleOnChange =(event) =>{                      //for changing the text in the textarea
        //console.log("handleOnChange fuction is fired.");        
        setText(event.target.value);
    }

    const handleSpace =() =>{
        let newText = text.split(/[]+/);
        setText(newText.join(" "));
    }
    
    const handleCopy = () =>{
        let tex = document.getElementById("myBox");
        tex.select();
        navigator.clipboard.writeText(tex.value);
    }

    const [text, setText] = useState(''); //state change function
    //setText("Text here");         //corect way to change state  
    //text="text here";             //wrong way
    
    return (
        <>
            <div className='container'style={{color: props.mode==="light"?"black":"white"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"grey":"white",color:props.mode==="light"?"black":"white"}} onChange={handleOnChange} placeholder='Enter Text' value={text} id="myBox" rows="10"></textarea>                
                </div>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleCapitalize}>Capitalize Words</button>
            <button className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>
            <button className='btn btn-primary mx-2' onClick={handleSpace}>Handling Extra Spaces</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            

            <div className='container' style={{color: props.mode==="light"?"black":"white"}}>
               <h2>Text Summary</h2>    
                <h5>{text.split(" ").length - 1} Words and {text.length} Characters</h5>
                <h5>It will take {0.008 * text.split(" ").length} minutes to read this text.</h5>              
                <h5>Text has {text.split(".").length - 1} sentances.</h5>
                <h2>Preview</h2>
                {text}
            </div>        
        </>
    )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired,    
};
TextForm.defaultProps = {
    heading: 'Your text here',    
  };