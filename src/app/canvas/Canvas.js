import React, { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import CanvasContainer from './CanvasContainer';
import SectionContainer from './features/section/SectionContainer';
import BrushContainer from './features/brush/BrushContainer';
import BrushPicker from './features/brush/BrushPicker';
import BrushColorPicker from './features/brush/BrushColorPicker';
import BrushColorContainer from './features/brush/BrushColorContainer';
import DefaultColors from './DefaultColors';
import DefaultSizes from './DefaultSizes';
import RGBToHex from '../utilities/RGBToHex';
import MyCanvas from './MyCanvas';

function Canvas() {
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(16);

  const handleColor = e => {
    const newColor = RGBToHex(getComputedStyle(e.target).backgroundColor);
    setColor(newColor);
  };

  const handleSize = brushSize => setSize(brushSize);

  return (
    <CanvasContainer>
      <div>
        <SectionContainer>
          <div className="bold">Brush Color:</div>
          <BrushColorContainer id="color-container" inlineGrid columns={5}>
            {DefaultColors.map(defaultColor => (
              <BrushColorPicker
                key={defaultColor}
                className={defaultColor === color && 'selected'}
                brushColor={defaultColor}
                onClick={handleColor}
              />
            ))}
          </BrushColorContainer>
        </SectionContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 1em',
          }}
        >
          <div className="bold">Line Weight:</div>
          {DefaultSizes.map(defaultSize => (
            <BrushContainer
              className={defaultSize === size && 'selected'}
              key={defaultSize}
              onClick={() => handleSize(defaultSize)}
            >
              <BrushPicker brushSize={defaultSize} />
            </BrushContainer>
          ))}
        </div>
      </div>
      <CanvasDraw
        lazyRadius={0}
        brushRadius={size}
        brushColor={color}
        catenaryColor={color}
        hideGrid={!!true}
        canvasWidth={1152}
        canvasHeight={648}
      />
      <MyCanvas brushColor={color} brushSize={size} canvasWidth={1152} canvasHeight={648} />
    </CanvasContainer>
  );
}

export default Canvas;
