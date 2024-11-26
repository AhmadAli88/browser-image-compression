import './App.css';
import CompressMultipleImages from './components/CompressMultipleImages';
import CompressWithProgress from './components/CompressWithProgress';
import CompressAndUpload from './components/ImageCompressor';
import PreviewCompressedImage from './components/PreviewCompressedImage';
import SaveCompressedToLocalStorage from './components/SaveCompressedToLocalStorage';

function App() {
  return (
    <div>
      <CompressAndUpload />
      <CompressMultipleImages/>
      <CompressWithProgress/>
      <PreviewCompressedImage/>
      <SaveCompressedToLocalStorage/>
    </div>
  );
}

export default App;
