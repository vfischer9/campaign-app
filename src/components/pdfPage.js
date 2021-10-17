import React from 'react';
import arbpdf from '../components/arb.pdf';
import '.././App.css';
import {Link} from "react-router-dom";

function pdfPage() {
    return (
        <div>
            {/* <Link to="/" className='homeButton'>Go Back</Link> */}
            <div>
                <object data={arbpdf} className='panel' type="application/pdf">
                </object>
            </div> 
                 
        </div>
    )
}

export default pdfPage
