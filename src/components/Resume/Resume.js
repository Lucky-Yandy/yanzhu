

import { Document, Page, pdfjs } from 'react-pdf';
import pdFile from '../../Yan-Zhu-Resume.pdf';
import './Resume.css';
import React from 'react';

function Resume () {
  return (
    <div className="fileload">
     <iframe src="https://docs.google.com/document/d/1d6ebljgQOJAYGtY8FMeiW-gW4yc9SLT02hTmn8FwQko/preview" className="resume-iframe" scrolling="no" width="100%" height="100%" />
    
   
    </div>
  );
};

export default Resume;




