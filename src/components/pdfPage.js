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

                <object data={arbpdf} className='panel' type="application/pdf" width="100%" height="800px"> 
                <p>It appears you don't have a PDF plugin for this browser.
                No biggie... you can <a href={arbpdf}>click here to
                download the PDF file.</a></p>  
                </object>

            </div> 
                 
        </div>
    )
}

export default pdfPage
