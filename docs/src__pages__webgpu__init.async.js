"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[716],{22858:function(C,c,t){t.r(c);var h=t(15009),m=t.n(h),w=t(99289),P=t.n(w),E=function(){var y=P()(m()().mark(function p(){var b,a,i,o,r,u,_,s,l,v,f,g,d,n;return m()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(b=document.querySelector("canvas"),a=window.navigator,i=window.GPUBufferUsage,a.gpu){e.next=5;break}throw new Error("WebGPU not supported on this browser.");case 5:return e.next=7,a.gpu.requestAdapter();case 7:if(o=e.sent,o){e.next=10;break}throw new Error("No appropriate GPUAdapter found.");case 10:return e.next=12,o.requestDevice();case 12:r=e.sent,u=b.getContext("webgpu"),_=a.gpu.getPreferredCanvasFormat(),u.configure({device:r,format:_}),s=new Float32Array([-.8,-.8,.8,-.8,.8,.8,-.8,-.8,.8,.8,-.8,.8]),l=r.createBuffer({label:"Cell vertices",size:s.byteLength,usage:i.VERTEX|i.COPY_DST}),r.queue.writeBuffer(l,0,s),v={arrayStride:8,attributes:[{format:"float32x2",offset:0,shaderLocation:0}]},f=r.createShaderModule({label:"Cell shader",code:`
      @vertex
      fn vertexMain(@location(0) position: vec2f)
        -> @builtin(position) vec4f {
        return vec4f(position, 0, 1);
      }

      @fragment
      fn fragmentMain() -> @location(0) vec4f {
        return vec4f(1, 0, 0, 1);
      }
    `}),g=r.createRenderPipeline({label:"Cell pipeline",layout:"auto",vertex:{module:f,entryPoint:"vertexMain",buffers:[v]},fragment:{module:f,entryPoint:"fragmentMain",targets:[{format:_}]}}),d=r.createCommandEncoder(),n=d.beginRenderPass({colorAttachments:[{view:u.getCurrentTexture().createView(),loadOp:"clear",clearValue:{r:0,g:0,b:.4,a:1},storeOp:"store"}]}),n.setPipeline(g),n.setVertexBuffer(0,l),n.draw(s.length/2),n.end(),r.queue.submit([d.finish()]);case 29:case"end":return e.stop()}},p)}));return function(){return y.apply(this,arguments)}}();c.default=E}}]);
