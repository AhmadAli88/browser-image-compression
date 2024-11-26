import { useState } from 'react';
import imageCompression from 'browser-image-compression';

const CompressAndUpload = () => {
  const [compressedFile, setCompressedFile] = useState(null);

  const handleImageUpload = async (event) => {
    if (!event.target.files) return;
    const file = event.target.files[0];

    // Compression options
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      setCompressedFile(compressedFile);

      // Simulate upload
      console.log("Compressed File Ready for Upload:", compressedFile);
      // Upload logic here (e.g., POST request to your server)
    } catch (error) {
      console.error("Error compressing the image:", error);
    }
  };

  return (
    <div>
      <h3>Upload and Compress Image</h3>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {compressedFile && (
        <p>
          Compressed File Size: {(compressedFile.size / 1024 / 1024).toFixed(2)} MB
        </p>
      )}
    </div>
  );
};

export default CompressAndUpload;
