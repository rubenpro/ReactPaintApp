import React, { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import styled from 'styled-components';
import defaultColors from './DefaultColors';
import defaultSizes from './DefaultSizes';

const formatGrid = cols => {
  const string = 'auto';
  let result = '';
  for (let i = 0; i < cols; i += 1) {
    result += `${string} `;
  }
  return result;
};

const ColorSelection = styled.div`
  display: ${props => (props.inlineGrid ? 'inline-grid' : 'block')};
  grid-template-columns: ${props => (props.columns ? formatGrid(props.columns) : 'none')};
  margin: 0.5em 0;
`;

const ColorPicker = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.brushColor ? props.brushColor : 'none')};
  border-radius: 100%;
  display: inline-block;
  margin: 0.25em;
  cursor: pointer;
  &.selected::before {
    content: '\\2714';
    color: white;
    font-size: 12px;
    position: relative;
    left: 5px;
    top: 1px;
  }
`;

const BrushContainer = styled.div`
  cursor: pointer;
  border: 1px solid transparent;
  &.selected {
    border: 1px solid green;
  }
`;

const BrushPicker = styled.div`
  width: calc(100% - 2em);
  height: ${props => (props.brushSize ? props.brushSize : '14')}px;
  background-color: #000000;
  border-radius: 2em;
  display: inline-block;
  margin: 1em;
  cursor: pointer;
`;

function RGBToHex(rgb) {
  // Choose correct separator
  const sep = rgb.indexOf(',') > -1 ? ',' : ' ';
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb
    .substr(4)
    .split(')')[0]
    .split(sep);

  let r = (+rgb[0]).toString(16);
  let g = (+rgb[1]).toString(16);
  let b = (+rgb[2]).toString(16);

  if (r.length === 1) r = `0${r}`;
  if (g.length === 1) g = `0${g}`;
  if (b.length === 1) b = `0${b}`;

  return `#${r}${g}${b}`;
}

function Canvas() {
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(16);

  const handleColor = e => {
    const newColor = RGBToHex(getComputedStyle(e.target).backgroundColor);
    setColor(newColor);
  };

  const handleSize = brushSize => {
    console.log('brushSize', brushSize);
    setSize(brushSize);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 1em',
          }}
        >
          <div className="bold">Brush Color:</div>
          <ColorSelection id="color-selection" inlineGrid columns={5}>
            {defaultColors.map(defaultColor => (
              <ColorPicker
                key={defaultColor}
                className={defaultColor === color && 'selected'}
                brushColor={defaultColor}
                onClick={handleColor}
              />
            ))}
          </ColorSelection>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 1em',
          }}
        >
          <div className="bold">Line Weight:</div>
          {defaultSizes.map(defaultSize => (
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
        onChange={null} // callback function
        loadTimeOffset={5} // ?
        lazyRadius={0}
        brushRadius={size}
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
    </div>
  );
}

export default Canvas;
