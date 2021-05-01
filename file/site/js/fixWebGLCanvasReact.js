const componentDidMount = () => {
  setTimeout(() => { 
    this.addCanvasWebGLContextLossEventListener();
  }, 2500);
};

const componentWillUnmount = () => {
  this.removeCanvasWebGLContextLossEventListener();
};
