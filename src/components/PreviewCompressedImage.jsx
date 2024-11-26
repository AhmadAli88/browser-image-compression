import { useState } from 'react';
import imageCompression from 'browser-image-compression';

const PreviewCompressedImage = () => {
  const [compressedImage, setCompressedImage] = useState(null);

  const handleImageUpload = async (event) => {
    if (!event.target.files) return;
    const file = event.target.files[0];

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const imageUrl = URL.createObjectURL(compressedFile);
      setCompressedImage(imageUrl);
    } catch (error) {
      console.error("Error compressing the image:", error);
    }
  };

  return (
    <div>
      <h3>Preview Compressed Image</h3>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {compressedImage && (
        <div>
          <h4>Compressed Image Preview</h4>
          <img src={compressedImage} alt="Compressed Preview" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default PreviewCompressedImage;
