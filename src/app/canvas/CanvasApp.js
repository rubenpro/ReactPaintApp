import React, { useState, useRef } from 'react';
import RGBToHex from '../utilities/RGBToHex';
import CanvasContainer from './CanvasContainer';
import FeaturesContainer from './features/FeaturesContainer';
import FeatureContainer from './features/FeatureContainer';
import IconButton from '../utilities/IconButton';
import Undo from '../assets/undo.svg';
import Redo from '../assets/redo.svg';
import Clean from '../assets/recycle.svg';
import BrushColorContainer from './features/brush/BrushColorContainer';
import BrushColorPicker from './features/brush/BrushColorPicker';
import DefaultColors from '../utilities/DefaultColors';
import BrushContainer from './features/brush/BrushContainer';
import BrushPicker from './features/brush/BrushPicker';
import DefaultSizes from '../utilities/DefaultSizes';
import Canvas from './Canvas';

function CanvasApp() {
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
      <FeaturesContainer>
        <FeatureContainer horizontal>
          <IconButton title="Undo" onClick={handleUndo}>
            <Undo />
          </IconButton>
          <IconButton title="Redo" onClick={handleRedo}>
            <Redo />
          </IconButton>
          <IconButton title="Clean" onClick={clean}>
            <Clean />
          </IconButton>
        </FeatureContainer>
        <FeatureContainer>
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
        </FeatureContainer>
        <FeatureContainer>
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
        </FeatureContainer>
      </FeaturesContainer>
      <Canvas
        ref={childRef}
        brushColor={color}
        brushSize={size}
        canvasWidth={1152}
        canvasHeight={648}
      />
    </CanvasContainer>
  );
}

export default CanvasApp;
