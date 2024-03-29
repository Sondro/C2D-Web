const simulateWebGLContextLoss = () => {
  // 
  // simulate loss of WebGL context, for the purposes
  // of improving user experience when the browser is 
  // overwhelmed
  //
  const canvases = document.getElementsByTagName("canvas");
  if (canvases.length === 1) {
    setTimeout(() => {
      const webgl2Context = canvases[0].getContext("webgl2", {});
      if (webgl2Context) {
        console.log(`losing webgl2 context...`);
        webgl2Context.getExtension('WEBGL_lose_context').loseContext();
      } else {
        const webglContext = canvases[0].getContext("webgl", {});
        if (webglContext) {
          console.log(`losing webgl context...`);
          webglContext.getExtension('WEBGL_lose_context').loseContext();
        }
      }
    }, 5000);
  }
};
