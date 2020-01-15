import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redoList: [],
      undoList: [],
      isDrawing: false,
      canvas: '',
      ctx: {},
    };
  }

  componentDidMount() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const { brushSize, brushColor } = this.props;

    ctx.lineWidth = brushSize;
    ctx.strokeStyle = brushColor;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    canvas.addEventListener('mousedown', e => {
      const x = e.pageX - canvas.offsetLeft;
      const y = e.pageY - canvas.offsetTop;

      ctx.beginPath();
      ctx.moveTo(x, y);

      this.saveState(canvas);
      this.setState({ isDrawing: true });
    });

    canvas.addEventListener('mousemove', e => {
      const { isDrawing } = this.state;

      if (isDrawing) {
        const x = e.pageX - canvas.offsetLeft;
        const y = e.pageY - canvas.offsetTop;
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    });

    canvas.addEventListener('mouseup', () => {
      const { isDrawing } = this.state;

      if (isDrawing) {
        this.setState({ isDrawing: false });
      }
    });

    canvas.addEventListener('mouseout', () => {
      const { isDrawing } = this.state;

      if (isDrawing) {
        this.setState({ isDrawing: false });
      }
    });
  }

  saveState = (canvas, keepRedo = false, type) => {
    const ctx = canvas.getContext('2d');

    this.setState({ canvas, ctx });

    if (!keepRedo) {
      this.setState({ redoList: [] });
    }

    if (type === 'redo') {
      this.setState(prevState => ({
        redoList: [...prevState.redoList, canvas.toDataURL()],
      }));
    } else {
      this.setState(prevState => ({
        undoList: [...prevState.undoList, canvas.toDataURL()],
      }));
    }
  };

  restoreState = (canvas, ctx, list, type) => {
    const { canvasWidth, canvasHeight } = this.props;
    if (list.length) {
      this.saveState(canvas, true, type);
      const restore = list.pop();
      const img = new Image();
      img.src = restore;
      img.onload = () => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
      };
    }
  };

  handleUndo = () => {
    const { canvas, ctx, undoList } = this.state;
    this.restoreState(canvas, ctx, undoList, 'redo');
  };

  handleRedo = () => {
    const { canvas, ctx, redoList } = this.state;
    this.restoreState(canvas, ctx, redoList, 'undo');
  };

  clean = () => {
    const { canvas, ctx } = this.state;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.setState({ undoList: [], redoList: [] });
  };

  render() {
    const { canvasWidth, canvasHeight } = this.props;
    return (
      <>
        <canvas id="myCanvas" width={canvasWidth} height={canvasHeight} />
        <button type="button" onClick={this.handleUndo}>
          Undo
        </button>
        <button type="button" onClick={this.handleRedo}>
          Redo
        </button>
        <button type="button" onClick={this.clean}>
          Clean
        </button>
      </>
    );
  }
}

export default MyCanvas;

MyCanvas.propTypes = {
  brushColor: PropTypes.string,
  brushSize: PropTypes.number,
  canvasWidth: PropTypes.number,
  canvasHeight: PropTypes.number,
};

MyCanvas.defaultProps = {
  brushColor: '#000000',
  brushSize: 16,
  canvasWidth: 1152,
  canvasHeight: 648,
};
