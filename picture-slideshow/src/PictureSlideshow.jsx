import React, { useState } from 'react';
import './PictureSlideshow.css';

export default function PictureSlideshow({ pictures }) {
    const [idx, setPicture] = useState(0);

    const picture = pictures[idx];
    
    return (
        <div className="Slideshow">
            <button
                className="Slideshow__button"
                onClick={() => {
                    if (idx === 0) {
                        setPicture(pictures.length - 1);
                    } else {
                        setPicture(idx - 1);
                    }
                }}
            >
                {"<"}
            </button>
            <div>
                <img className="Slideshow__image" src={picture.imageUrl} alt={picture.description} />
                {/* <div
                    style={{
                        width: '500px',
                        height: '300px',
                        backgroundImage: `url(${picture.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div> */}
                <p className="Slideshow__description">
                    <span>{picture.description}</span>
                    <span className="Slideshow__paging">{idx + 1} of {pictures.length}</span>
                </p>
            </div>
            <button
                className="Slideshow__button"
                // onClick={() => setPicture((idx + 1) % pictures.length)}
                onClick={() => {
                    if (idx === pictures.length - 1) {
                        setPicture(0);
                    } else {
                        setPicture(idx + 1);
                    }
                }}
            >
                {">"}
            </button>
        </div>
    );
}
