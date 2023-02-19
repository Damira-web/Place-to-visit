import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [place, setPlace] = useState(0);
  const {id, country, city, description, image, showMore} = data[place];
  const [showText, setShowText] = useState(false);

  const previousPlace = () => {
    setPlace (( place => {
      place --;
      if (place < 0) {
        return data.length -1;
      }
      return place;
    }))
  }

  const nextPlace = () => {
    setPlace (( place => {
      place ++;
      if (place > data.length -1) {
        place = 0;
    }
    return place;
    }))
  }

  const showTextClick = (place) => {
    data.showMore = !data.showMore
    setShowText(!showText)
  }

  return (<div>

    <div className='container'>
      <img src={image} alt="place" width="500px"/>
    </div>

    <div className='container'>
      <h1>{id} - {country}, {city}</h1>
    </div>

    <div className='container'>
      <p>
        {showMore ? description : description.substring(0, 200) + '...'}
        <button className='show'  onClick={() => showTextClick (data)}>{showMore ? 'Show Less' : 'Show More'}</button>
      </p>
    </div>

    <div className='container btn'>
      <button onClick={previousPlace}>Previous</button>
      <button onClick={nextPlace}>Next</button>
    </div>

    </div>
  );
}

export default App;
