  <script type="text/javascript">
  componentDidMount() {
    setTimeout(() => { 
      this.addCanvasWebGLContextLossEventListener();
    }, 2500);
  }

  componentWillUnmount() {
    this.removeCanvasWebGLContextLossEventListener();
  }
  </script>