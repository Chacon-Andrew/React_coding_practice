import './App.css';
import {useEffect, useState} from 'react'
import pic_1 from './images/landscape_1.jpg'
import pic_2 from './images/landscape_2.jpg'
import pic_3 from './images/landscape_3.jpg'
import pic_4 from './images/landscape_4.jpg'
import pic_5 from './images/landscape_5.jpeg'

const images = [
  pic_1,
  pic_2,
  pic_3,
  pic_4,
  pic_5
]

function App() {
  const [index, setIndex] = useState(0)
  const [image, setImage] = useState('')
  const [player, setPlayer] = useState(false)

  const next = () => {
    if(index < images.length) setIndex(index + 1)
    console.log(index)
  }

  const back = () => {
    if(index > 0) setIndex(index - 1)
    console.log(index)
  }

  const play = () => {setPlayer(true)}

  const stop = () => {setPlayer(false)}

  useEffect(() => {
    setImage(images[index])
    if(player){
      const interval = setInterval(() => {
        if(index >= images.length) setIndex(0)
        else setIndex(index + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [index, image, player])


  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h1>Image Slider</h1>
      <img src={image} style={{width: '800px', height: '500px'}} alt='landscape from slider'/>
      <div>
        <button onClick={back}>Prev</button>
        <button onClick={next}>Next</button>
        <button onClick={play}>Play</button>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
