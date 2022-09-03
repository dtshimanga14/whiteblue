import "./css/Suggested.css";
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Slider from "./Slider";
import { GET_SUGGESTED } from "./queries/suggested";

const Suggested = () => {
  let id = "247582"||localStorage.getItem('user-token');	
  const [startCursor, setStartCursor] = useState("");
  const [endCursor, setEndCursor] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

   const slideWidth = () => {
      return document.querySelector('.friends-suggestions').clientWidth
    };
   const goToPrevSlide = () => {
     if(currentIndex === 0)
      return;
       setCurrentIndex(currentIndex - 1);
       setTranslateValue(translateValue + slideWidth());
     };

    const goToNextSlide = (suggestLenth) => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
      if(currentIndex === suggestLenth - 1) {
        setCurrentIndex(0);
        setTranslateValue(0);
        return null
      }  
// This will not run if we met the if condition above
      setCurrentIndex(currentIndex + 1);
      setTranslateValue(translateValue + -(slideWidth()));
    };

  const { loading, error, data, fetchMore } = useQuery(GET_SUGGESTED);
  if (loading) return (<div>'Loading...'</div>);
  if (error) return `Error! ${error.message}`;
  const suggestLenth = 2;

  return (
    <div className="suggestion-frame">
      <div className="suggestion-chevrons">
        <span className="left-chevrons" >
            <i className="fa fa-chevron-left"/>
        </span>
        <span className="right-chevrons" >
            <i className="fa fa-chevron-right"/>
        </span>
      </div>
      <Slider 
        ownerId = {id}
        suggestions={data.friends}
        translateValue = {translateValue}
        goToPrevSlide={goToPrevSlide}
        goToNextSlide={goToNextSlide}
        suggestLenth = {suggestLenth}
      />
		</div>
  );
};
export default Suggested;