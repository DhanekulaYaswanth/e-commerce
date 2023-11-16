
//exporting the necessary modules
const cloudinary = require('cloudinary').v2;  
const path = require('path');  
const dotenv = require('dotenv');

//exporting the data from files
const insertDataIntoMongoDB = require('../Mongodb/insertDataIntoMongoDB')
const data = require('./Data');

//config the dotenv
dotenv.config();

//connecting to the cloudinary
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});




async function uploadImage(localImagePath, folderName) {
  try {
    // Specify the folder name in the public_id
    const publicId = folderName ? `${folderName}/${path.basename(localImagePath, path.extname(localImagePath))}` : undefined;

    const result = await cloudinary.uploader.upload(localImagePath, { public_id: publicId });

    console.log('Image uploaded successfully:', result.secure_url);

    return result.secure_url; // Return the Cloudinary URL for the uploaded image

  } catch (error) {

    console.error('Error uploading image:', error);

    throw error; // Rethrow the error for handling in the calling code

  }
}



async function uploadImagesAndUpdateMongoDB() {
  try {
    const dataWithUUIDs = data();

    // Map through each item in the data
    const dataWithUpdatedImages = await Promise.all(
      dataWithUUIDs.map(async (item) => {
        // Map through each image in the Images array
        const updatedImages = await Promise.all(
          item.Images.map(async (image, ind) => {
            if (image) {
              // Upload the image and get the Cloudinary URL
              const localImagePath = path.join(__dirname, image);
              return await uploadImage(localImagePath, 'ecommerce');
            }
            return null; // If no image, return null
          })
        );

        // Update the item's Images field with the Cloudinary URLs
        return {
          ...item,
          Images: updatedImages,
        };
      })
    );

    // Insert data into MongoDB
    await insertDataIntoMongoDB(dataWithUpdatedImages);
  } catch (error) {
    console.error('Error uploading images, updating MongoDB, or inserting data:', error);
  }
}



module.exports = uploadImagesAndUpdateMongoDB;