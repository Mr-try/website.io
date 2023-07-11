"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[924],{6852:function(B,p,n){n.r(p);var P=n(3447),b=n.n(P),E=n(90887),U=n.n(E),C=function(){var M=U()(b()().mark(function g(){var o,v,_,t,u,e,i,l,f,a,s,d,h,m,w,c,y;return b()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(o=4,v=document.querySelector("canvas"),_=window.navigator,t=window.GPUBufferUsage,_.gpu){r.next=6;break}throw new Error("WebGPU not supported on this browser.");case 6:return r.next=8,_.gpu.requestAdapter();case 8:if(u=r.sent,u){r.next=11;break}throw new Error("No appropriate GPUAdapter found.");case 11:return r.next=13,u.requestDevice();case 13:e=r.sent,i=v.getContext("webgpu"),l=_.gpu.getPreferredCanvasFormat(),i.configure({device:e,format:l}),f=e.createCommandEncoder(),a=f.beginRenderPass({colorAttachments:[{view:i.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:.4,a:1},loadOp:"clear",storeOp:"store"}]}),s=new Float32Array([-.8,-.8,.8,-.8,.8,.8,-.8,-.8,.8,.8,-.8,.8]),d=e.createBuffer({label:"Cell vertices",size:s.byteLength,usage:t.VERTEX|t.COPY_DST}),e.queue.writeBuffer(d,0,s),h={arrayStride:8,attributes:[{format:"float32x2",offset:0,shaderLocation:0}]},m=e.createShaderModule({label:"Cell shader",code:`
    @vertex
    fn vertexMain(@location(0) pos: vec2f) ->
      @builtin(position) vec4f {
      return vec4f(pos, 0, 1);
    }

    @fragment
    fn fragmentMain() -> @location(0) vec4f {
      return vec4f(1, 0, 0, 1);
    }
    `}),w=e.createRenderPipeline({label:"Cell pipeline",layout:"auto",vertex:{module:m,entryPoint:"vertexMain",buffers:[h]},fragment:{module:m,entryPoint:"fragmentMain",targets:[{format:l}]}}),c=new Float32Array([o,o]),y=e.createBuffer({label:"Grid Uniforms",size:c.byteLength,usage:t.UNIFORM|t.COPY_DST}),e.queue.writeBuffer(y,0,c),a.setPipeline(w),a.setVertexBuffer(0,d),a.draw(s.length/2),a.end(),e.queue.submit([f.finish()]);case 33:case"end":return r.stop()}},g)}));return function(){return M.apply(this,arguments)}}();p.default=C}}]);
