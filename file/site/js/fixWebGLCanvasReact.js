  componentDidMount() {
    setTimeout(() => { 
      this.addCanvasWebGLContextLossEventListener();
    }, 2500);
  }

  componentWillUnmount() {
    this.removeCanvasWebGLContextLossEventListener();
  }