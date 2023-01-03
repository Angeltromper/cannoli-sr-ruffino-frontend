import React from 'react';

function ContentBox({children}) {
    return (
        <div>
            <article className="content-box">
                {children}
            </article>
        </div>
    );
}

export default ContentBox;


