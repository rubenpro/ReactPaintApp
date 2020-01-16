import React, { useState, useRef } from 'react';
import styled from 'styled-components';
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
import Undo from '../assets/undo.svg';
import Redo from '../assets/redo.svg';
import Clean from '../assets/recycle.svg';

const IconButton = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

function Canvas() {
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(16);
  const childRef = useRef();

  const handleColor = e => {
    const newColor = RGBToHex(getComputedStyle(e.target).backgroundColor);
    setColor(newColor);
  };

  const handleSize = brushSize => setSize(brushSize);

  const handleUndo = () => childRef.current.handleUndo();

  const handleRedo = () => childRef.current.handleRedo();

  const clean = () => childRef.current.clean();

  return (
    <CanvasContainer>
      <div>
        <SectionContainer horizontal>
          <IconButton title="Undo" onClick={handleUndo}>
            <Undo />
          </IconButton>
          <IconButton title="Redo" onClick={handleRedo}>
            <Redo />
          </IconButton>
          <IconButton title="Clean" onClick={clean}>
            <Clean />
          </IconButton>
        </SectionContainer>
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
        <SectionContainer>
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
        </SectionContainer>
      </div>
      {/* <CanvasDraw
        lazyRadius={0}
        brushRadius={size}
        brushColor={color}
        catenaryColor={color}
        hideGrid={!!true}
        canvasWidth={1152}
        canvasHeight={648}
      /> */}
      <MyCanvas
        ref={childRef}
        brushColor={color}
        brushSize={size}
        canvasWidth={1152}
        canvasHeight={648}
      />
    </CanvasContainer>
  );
}

export default Canvas;
