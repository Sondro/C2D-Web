{\rtf1\ansi\deff0{\fonttbl{\f0\fnil\fcharset0 Calibri;}}
{\*\generator Msftedit 5.41.21.2510;}\viewkind4\uc1\pard\sa200\sl276\slmult1\lang9\f0\fs22   addCanvasWebGLContextLossEventListener = () => \{\par
    const canvases = document.getElementsByTagName("canvas");\par
    if (canvases.length === 1) \{\par
      const canvas = canvases[0];\par
      canvas.addEventListener('webglcontextlost', (event) => \{\par
        window.location.reload();\par
      \});\par
    \}\par
  \}\par
\par
  removeCanvasWebGLContextLossEventListener = () => \{\par
    const canvases = document.getElementsByTagName("canvas");\par
    if (canvases.length === 1) \{\par
      const canvas = canvases[0];\par
      canvas.removeEventListener('webglcontextlost');\par
    \}\par
  \}\par
}
 