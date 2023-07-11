"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[716],{77674:function(C,m,n){n.r(m);var h=n(3447),c=n.n(h),w=n(90887),P=n.n(w),y=function(){var E=P()(c()().mark(function p(){var b,a,s,o,r,i,u,_,l,g,d,v,f,t;return c()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(b=document.querySelector("canvas"),a=window.navigator,s=window.GPUBufferUsage,a.gpu){e.next=5;break}throw new Error("WebGPU not supported on this browser.");case 5:return e.next=7,a.gpu.requestAdapter();case 7:if(o=e.sent,o){e.next=10;break}throw new Error("No appropriate GPUAdapter found.");case 10:return e.next=12,o.requestDevice();case 12:r=e.sent,i=b.getContext("webgpu"),u=a.gpu.getPreferredCanvasFormat(),i.configure({device:r,format:u}),_=new Float32Array([-.8,-.8,.8,-.8,.8,.8,-.8,-.8,.8,.8,-.8,.8]),l=r.createBuffer({label:"Cell vertices",size:_.byteLength,usage:s.VERTEX|s.COPY_DST}),r.queue.writeBuffer(l,0,_),g={arrayStride:8,attributes:[{format:"float32x2",offset:0,shaderLocation:0}]},d=r.createShaderModule({label:"Cell shader",code:`
      @vertex
      fn vertexMain(@location(0) position: vec2f)
        -> @builtin(position) vec4f {
        return vec4f(position, 0, 1);
      }

      @fragment
      fn fragmentMain() -> @location(0) vec4f {
        return vec4f(1, 0, 0, 1);
      }
    `}),v=r.createRenderPipeline({label:"Cell pipeline",layout:"auto",vertex:{module:d,entryPoint:"vertexMain",buffers:[g]},fragment:{module:d,entryPoint:"fragmentMain",targets:[{format:u}]}}),f=r.createCommandEncoder(),t=f.beginRenderPass({colorAttachments:[{view:i.getCurrentTexture().createView(),loadOp:"clear",clearValue:{r:0,g:0,b:.4,a:1},storeOp:"store"}]}),t.setPipeline(v),t.setVertexBuffer(0,l),t.draw(_.length/2),t.end(),r.queue.submit([f.finish()]);case 29:case"end":return e.stop()}},p)}));return function(){return E.apply(this,arguments)}}();m.default=y}}]);
