import React from 'react';
import Avatar from 'react-nice-avatar';

// Helper function to pick random elements from an array
const Avatars = (arr) => arr[Math.floor(Math.random() * arr.length)];

const AvatarComponent = () => {
  // Define arrays for possible avatar properties
  const faceColors = ['f5c6d0', 'ffcccb', 'f1c6b5'];
  const earSizes = ['small', 'medium', 'large'];
  const hairColors = ['brown', 'black', 'blonde', 'red'];
  const shirts = ['v-neck', 'round-neck', 'hoodie'];
  const eyeShapes = ['square', 'oval', 'round'];
  const accessories = ['sunglasses', 'glasses', 'none'];

  // Get random values for each property
  const randomFaceColor = getRandomElement(faceColors);
  const randomEarSize = getRandomElement(earSizes);
  const randomHairColor = getRandomElement(hairColors);
  const randomShirt = getRandomElement(shirts);
  const randomEyeShape = getRandomElement(eyeShapes);
  const randomAccessories = getRandomElement(accessories);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Avatar
        style={{ width: 100, height: 100 }}
        faceColor={randomFaceColor}
        earSize={randomEarSize}
        hairColor={randomHairColor}
        shirt={randomShirt}
        eyeShape={randomEyeShape}
        accessories={randomAccessories}
      />
    </div>
  );
};

export default Avatars;
