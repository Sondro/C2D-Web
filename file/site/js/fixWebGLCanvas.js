  <script type="text/javascript">
  addCanvasWebGLContextLossEventListener = () => {
    const canvases = document.getElementsByTagName("canvas");
    if (canvases.length === 1) {
      const canvas = canvases[0];
      canvas.addEventListener('webglcontextlost', (event) => {
        window.location.reload();
      });
    }
  }

  removeCanvasWebGLContextLossEventListener = () => {
    const canvases = document.getElementsByTagName("canvas");
    if (canvases.length === 1) {
      const canvas = canvases[0];
      canvas.removeEventListener('webglcontextlost');
    }
  }
  </script>