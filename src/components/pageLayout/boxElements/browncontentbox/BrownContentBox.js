import React from 'react';

function BrownContentBox({children}) {
    return (
        <div>
            <article className="content-box">
                {children}
            </article>
        </div>
    );
}

export default BrownContentBox;


