import React from 'react';

function Giftbox ({label, img, title}) {
    return (
        <article>
            <span>{label}</span>
            <img src={img} alt={title}/>
            <p>{title}</p>
        </article>
    );
}

export default Giftbox;
