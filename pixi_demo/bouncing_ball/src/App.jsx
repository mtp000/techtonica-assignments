import React, { useState, useEffect } from 'react';
import { Stage, Sprite } from '@pixi/react';  // Updated import from @pixi/react
import * as PIXI from 'pixi.js';  // Import PIXI to manage textures if needed

const Ball = ({ speed, onClick }) => {
  const [position, setPosition] = useState({ x: 250, y: 250 });
  const [velocity, setVelocity] = useState({ dx: speed, dy: speed });

//sync velocity with speed prop whenever speed changes
  useEffect(() => {
    setVelocity({ dx: speed, dy: speed });
  }, [speed]);

  // Update position on each frame
  useEffect(() => {
    const updatePosition = () => {
      setPosition(prevPos => {
        let { x, y } = prevPos;
        let { dx, dy } = velocity;

        // Check for boundary collisions
        if (x <= 0 || x >= 500 - 50) dx = -dx;
        if (y <= 0 || y >= 500 - 50) dy = -dy;

        setVelocity({ dx, dy });
        return { x: x + dx, y: y + dy };
      });
    };

    const id = setInterval(updatePosition, 16); // 60 FPS (~16ms per frame)
    return () => clearInterval(id);
  }, [velocity]);

  return (
    <Sprite
      texture={PIXI.Texture.from('https://pixijs.io/examples/examples/assets/bunny.png')} // Updated for @pixi/react v7
      x={position.x}
      y={position.y}
      width={50}
      height={50}
      interactive={true}
      buttonMode={true} // Change cursor on hover
      pointerdown={onClick} // Handle click events
      anchor={0.5} // Anchor the sprite at its center
      hitArea={new PIXI.Rectangle(0, 0, 50, 50)} // Define hit area for clicks
    />
  );
};

const App = () => {
  const [speed, setSpeed] = useState(5);

  // Function to change speed on click
  const handleClick = () => {
    console.log("Sprite clicked!");  // Debugging message
    setSpeed((prevSpeed) => {
      const newSpeed = prevSpeed === 5 ? 1 : 5;
      console.log(`Speed changed to: ${newSpeed}`); // Log new speed
      return newSpeed;
    });
  };

  return (
    <Stage width={500} height={500} options={{ backgroundColor: 0 }}>
      <Ball speed={speed} onClick={handleClick} />
    </Stage>
  );
};

export default App;
