// Parent Component
import { useState } from 'react'
// Child component - React Library Import of choice 
import { Rating } from 'react-simple-star-rating'

function App() {
  // useState stores the current rating (we start at 0). When it changes, React will re-render the sentence, and our screen will update.
  const [rating, setRating] = useState(0)

  // My Click Handler to catch rating value
  // "handleRating" runs when the user clicks a star. The library then gives it the star number as "rate", and "setRating" saves that number in State.
  // The console.log is only here to show the value in the video.
  const handleRating = (rate) => {
    setRating(rate)
    console.log(`User rated this coffee: ${rate} stars`)
  }

  // Our App function return contains what we need to display on screen. 
  return (
    <div style = {{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>☕ Coffee Bean Journal Rating Feature</h1>
      <p>Hi barista! Rate your latest brew:</p>

      {/* <Rating> is the library's component. These props come from the library's GitHub docs. */}
      <Rating
        onClick = {handleRating} // Calls my arrow function when a star is clicked.
        initialValue = {rating} // Tells <Rating> how many stars to fill, using our rating saved in state.
        size = {40}
        fillColor = "#ffd700"
      />

      <p>You rated this coffee: {rating} / 5</p>
    </div>
  )
}

export default App

/*  
Opted out of CSS-IN-JS for this tutorial to reduce time. 
*/