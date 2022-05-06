import './App.css';
import PictureSlideshow from './PictureSlideshow';

const pictures = [
  {
    imageUrl: 'https://photos.smugmug.com/Landscapes/Mount-Rainier/i-rkdw3qt/1/46bcd681/X2/MountRainier_Panorama1a1_10-11-09-X2.jpg',
    description: 'Mt. Rainier during the summer'
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/46/b7/b6/46b7b6af7e7a3d1d21617fb1af420f24.jpg',
    description: 'Adult Coloring book drawing... completed!'
  },
  {
    imageUrl: 'https://media.giphy.com/media/1n4iuWZFnTeN6qvdpD/giphy.gif',
    description: 'Fire this is fine Elmo'
  }
];

function App() {
  return (
    <div className="App">
      <PictureSlideshow pictures={pictures} />
    </div>
  );
}

export default App;
