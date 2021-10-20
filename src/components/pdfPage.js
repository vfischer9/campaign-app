import React from 'react';
import arbpdf from '../components/arb.pdf';
import '.././App.css';
import {Link} from "react-router-dom";

let screen = window.screen.availWidth;
let mobile = false;

function componentDidMount(){
    if(screen < 960){
        mobile = true;
        return(
            <iframe id='scaled-frame' src="https://onedrive.live.com/embed?cid=BE35587733C974EE&resid=BE35587733C974EE%2145365&authkey=ALizqDImQYcmoMg&em=2#view='fitH" title="arbitration pdf"  />            
        )
    }
    else if(screen > 960){
        mobile = false;
        return(
            <iframe className='panel' src={`${arbpdf}#zoom=fitH`} title="arbitration pdf" height="100%" width="100%" />
        )
    }
}

function pdfPage() {

    
    return (
        <div id='wrap'>

            {componentDidMount()}
            <br />
            <p className='hide'>(Change the zoom by clicking on the percentage)</p>
                 
        </div>
    )
}

export default pdfPage
