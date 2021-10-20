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
            <iframe className='panel' src={`${"https://onedrive.live.com/embed?cid=BE35587733C974EE&resid=BE35587733C974EE%2145365&authkey=ALizqDImQYcmoMg&em=2"}#view=fitH`} title="arbitration pdf" height="100vh" width="100%" />
            // <iframe width="300" height="200" src={"https://onedrive.live.com/embed?cid=BE35587733C974EE&resid=BE35587733C974EE%2145365&authkey=ALizqDImQYcmoMg&em=2"} ></iframe>
        )
    }
    else if(screen > 960){
        mobile = false;
        return(
            <iframe className='panel' src={`${arbpdf}#view=fitH`} title="arbitration pdf" height="100vh" width="100%" />
        )
    }
}

function pdfPage() {

    
    return (
        <div>

            {componentDidMount()}
                 
        </div>
    )
}

export default pdfPage
