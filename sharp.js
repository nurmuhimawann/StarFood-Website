/* eslint-disable no-use-before-define */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images/heros');

// Create the destination directory asynchronously
if (!fs.existsSync(destination)) {
  fs.mkdir(destination, { recursive: true }, (err) => {
    if (err) {
      console.error('Failed to create directory:', err);
    } else {
      console.log('Directory created successfully!');
      resizeImages();
    }
  });
} else {
  console.log('Directory already exists.');
  resizeImages();
}

function resizeImages() {
  fs.readdirSync(target).forEach((image) => {
    const imageName = path.parse(image).name;

    // Resize image to 800px width with a prefix of -large.jpg
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        destination,
        `${imageName}-large.jpg`,
      ), (err) => {
        if (err) {
          console.error(`Failed to resize ${image}:`, err);
        } else {
          console.log(`Resized ${image} to 800px width.`);
        }
      });

    // Resize image to 480px width with a prefix of -small.jpg
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        destination,
        `${imageName}-small.jpg`,
      ), (err) => {
        if (err) {
          console.error(`Failed to resize ${image}:`, err);
        } else {
          console.log(`Resized ${image} to 480px width.`);
        }
      });
  });
}
