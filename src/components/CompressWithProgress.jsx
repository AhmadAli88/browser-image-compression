import  { useState } from 'react';
import imageCompression from 'browser-image-compression';

const CompressWithProgress = () => {
  const [progress, setProgress] = useState(0);

  const handleImageUpload = async (event) => {
    if (!event.target.files) return;
    const file = event.target.files[0];

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
      onProgress: (progress) => setProgress(progress),
    };

    try {
      const compressedFile = await imageCompression(file, options);
      console.log("Compressed File:", compressedFile);
    } catch (error) {
      console.error("Error compressing the image:", error);
    }
  };

  return (
    <div>
      <h3>Compress Image with Progress</h3>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {progress > 0 && <p>Compression Progress: {progress.toFixed(2)}%</p>}
    </div>
  );
};

export default CompressWithProgress;
