import imageCompression from "browser-image-compression";

const SaveCompressedToLocalStorage = () => {
  const handleImageUpload = async (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      console.error("No file selected");
      return;
    }

    const file = event.target.files[0];
    console.log("Original File Size:", (file.size / 1024 / 1024).toFixed(2), "MB");

    const options = {
      maxSizeMB: 1, // Reduce size to under 1MB
      maxWidthOrHeight: 800, // Max dimension
      useWebWorker: true, // Use Web Worker for performance
    };

    try {
      const compressedFile = await imageCompression(file, options);
      console.log(
        "Compressed File Size:",
        (compressedFile.size / 1024 / 1024).toFixed(2),
        "MB"
      );

      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          localStorage.setItem("compressedImage", reader.result);
          console.log("Image saved to local storage successfully!");
        } else {
          console.error("Reader result is empty");
        }
      };

      reader.onerror = (err) => {
        console.error("FileReader Error:", err);
      };

      reader.readAsDataURL(compressedFile); // Convert file to Base64
    } catch (error) {
      console.error("Error compressing the image:", error);
    }
  };

  return (
    <div>
      <h3>Save Compressed Image to Local Storage</h3>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};

export default SaveCompressedToLocalStorage;
