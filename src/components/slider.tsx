import React, {useRef} from "react";

import {ReflexContainer, ReflexElement} from "react-reflex";
import ReactHtmlParser from "react-html-parser";

import ReactPageScroller from "../utils/react-page-scroller";
// import trainning from "./example";
// you can replace string above with import with path to you trainning file
import trainning from "./c1_p1_t1";

import "./fonts.css";
import "./slide.css";

const Slider = () => {
  const lessonRef = useRef(null);

  if (!trainning) {
    return <div>No trainning</div>
  }

  return (
    <ReflexContainer
      orientation="horizontal"
      style={{height: "100%", width: "33vw", margin: "auto"}}
    >
      <ReactPageScroller
        animationTimer={300}
        containerWidth="100%"
      >
        {trainning.slides.map((slide, slideNumber) => {
          return (
            <div
              key={`${slideNumber}`}
              style={{height: "100%"}}
              ref={lessonRef}
            >
              <ReflexElement
                flex={1}
                style={{height: "100%"}}
              >
                <div
                  className={`slide__wrapper slide__${slide.type}`}
                  id={`slide${slideNumber}`}
                >
                  {slide.title ? (
                    <h3 className="slide__title slide__top">{slide.title}</h3>
                  ) : (
                    <div className="slide__top" />
                  )}
                  {ReactHtmlParser(slide.html_content)}
                  {slide.challenge ? (
                    <div className="slide__bottom">
                      <button className="slide__btn slide__btn--challenge">
                        Let's get Coding
                      </button>
                    </div>
                  ) : (
                    <div className="slide__bottom" />
                  )}
                </div>
              </ReflexElement>
            </div>
          );
        })}
      </ReactPageScroller>
    </ReflexContainer>
  );
};

export default Slider;
