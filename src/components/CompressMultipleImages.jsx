import { useState } from 'react';
import imageCompression from 'browser-image-compression';

const CompressMultipleImages = () => {
  const [compressedFiles, setCompressedFiles] = useState([]);

  const handleMultipleImages = async (event) => {
    if (!event.target.files) return;
    const files = Array.from(event.target.files);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    try {
      const compressedFiles = await Promise.all(
        files.map((file) => imageCompression(file, options))
      );
      setCompressedFiles(compressedFiles);
    } catch (error) {
      console.error("Error compressing images:", error);
    }
  };

  return (
    <div>
      <h3>Upload and Compress Multiple Images</h3>
      <input type="file" accept="image/*" multiple onChange={handleMultipleImages} />
      {compressedFiles.map((file, index) => (
        <p key={index}>
          Compressed File {index + 1} Size: {(file.size / 1024 / 1024).toFixed(2)} MB
        </p>
      ))}
    </div>
  );
};

export default CompressMultipleImages;
