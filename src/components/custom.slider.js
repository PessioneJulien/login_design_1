import React, { useState, useEffect } from "react";

import "./custom.slider.css";

function CustomCarousel({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDone, setSlideDone] = useState(true);
    const [timeID, setTimeID] = useState(null);

    useEffect(() => {
        if (slideDone) {
            setSlideDone(false);
            setTimeID(
                setTimeout(() => {
                    slideNext();
                    setSlideDone(true);
                }, 5000)
            );
        }
    }, [slideDone]);

    const slideNext = () => {
        setActiveIndex((val) => {
            if (val >= children.length - 1) {
                return 0;
            } else {
                return val + 1;
            }
        });
    };

    const AutoPlayStop = () => {
        if (timeID > 0) {
            clearTimeout(timeID);
            setSlideDone(false);
        }
    };

    const AutoPlayStart = () => {
        if (!slideDone) {
            setSlideDone(true);
        }
    };

    return (
        <div
            className="container__slider"
            onMouseEnter={AutoPlayStop}
            onMouseLeave={AutoPlayStart}
        >
            {children.map((item, index) => {
                return (
                    <div
                        className={"slider__item slider__item-active-" + (activeIndex + 1)}
                        key={index}
                    >
                        {item}
                    </div>
                );
            })}

            <div className="container__slider__links">
                {children.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={
                                activeIndex === index
                                    ? "container__slider__links-small container__slider__links-small-active"
                                    : "container__slider__links-small"
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveIndex(index);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default CustomCarousel;