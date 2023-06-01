/*
 * @Author: try try418@163.com
 * @Date: 2023-06-01 16:57:56
 * @Description: 
 */
const init = async () => {
  const canvas: any = document.querySelector('canvas');
  const navigator: any = window.navigator
  const GPUBufferUsage: any = (window as any).GPUBufferUsage
  if (!navigator.gpu) {
    throw new Error('WebGPU not supported on this browser.');
  }
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw new Error('No appropriate GPUAdapter found.');
  }
  const device = await adapter.requestDevice();

  // Canvas configuration
  const context = canvas.getContext('webgpu');
  const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
  context.configure({
    device: device,
    format: canvasFormat,
  });

  const encoder = device.createCommandEncoder()

  const pass = encoder.beginRenderPass({
    colorAttachments: [{
      view: context.getCurrentTexture().createView(),
      clearValue: { r: 0, g: 0, b: 0.4, a: 1 },
      loadOp: 'clear',
      storeOp: 'store'
    }]
  })

  const vertices = new Float32Array([
    -0.8, -0.8, // Triangle 1 (Blue)
    0.8, -0.8,
    0.8, 0.8,

    -0.8, -0.8, // Triangle 2 (Red)
    0.8, 0.8,
    -0.8, 0.8,
  ]);

  const vertexBuffer = device.createBuffer({
    label: "Cell vertices",
    size: vertices.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
  });

  device.queue.writeBuffer(vertexBuffer, /*bufferOffset=*/0, vertices);

  const vertexBufferLayout = {
    arrayStride: 8,
    attributes: [{
      format: "float32x2",
      offset: 0,
      shaderLocation: 0, // Position, see vertex shader
    }],
  };

  pass.end()
  device.queue.submit([encoder.finish()]);
};

export default init