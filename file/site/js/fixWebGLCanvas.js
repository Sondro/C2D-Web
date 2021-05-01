const addCanvasWebGLContextLossEventListener = () => {
  const canvases = document.getElementsByTagName("canvas");
  if (canvases.length === 1) {
    canvases[0].addEventListener('webglcontextlost', (event) => {
      window.location.reload();
    });
  }
};

const removeCanvasWebGLContextLossEventListener = () => {
  const canvases = document.getElementsByTagName("canvas");
  if (canvases.length === 1) {
    canvases[0].removeEventListener('webglcontextlost');
  }
};
