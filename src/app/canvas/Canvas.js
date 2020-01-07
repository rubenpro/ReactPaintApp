import React, { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import styled from 'styled-components';
import defaultColors from './defaultColors';

const ColorPicker = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.brushColor};
  border-radius: 100%;
  display: inline-block;
`;

function Canvas() {
  const [color, setColor] = useState('black');

  const handleClick = e => {
    const newColor = getComputedStyle(e.target).backgroundColor;
    setColor(newColor);
  };

  return (
    <>
      <div id="color-selection">
        {defaultColors.map(defaultColor => (
          <ColorPicker key={defaultColor} brushColor={defaultColor} onClick={handleClick} />
        ))}
      </div>
      <CanvasDraw
        onChange={null} // callback function
        loadTimeOffset={5} // ?
        lazyRadius={0}
        brushRadius={6}
        brushColor={color}
        catenaryColor={color}
        // gridColor="rgba(150,150,150,0.17)"
        hideGrid={!!true}
        canvasWidth={1152}
        canvasHeight={648}
        disabled={false}
        imgSrc=""
        saveData={null} // callback function
        immediateLoading={false} // ?
        hideInterface={false} // hide UI elements
      />
    </>
  );
}

export default Canvas;
