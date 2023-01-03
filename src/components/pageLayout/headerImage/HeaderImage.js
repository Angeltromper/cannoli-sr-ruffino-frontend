import React from 'react';
import Header from '../header/Header';

 function HeaderImage({headerImage, pageTitle}) {
     return (
         <div className="header-img-container">
             <figure>
                 <img src={headerImage} className="header-img" alt={pageTitle}/>
             </figure>
             <div className="page-title">
             <h1>{pageTitle}</h1>
             </div>
         </div>
     );
 }

 export default HeaderImage;

