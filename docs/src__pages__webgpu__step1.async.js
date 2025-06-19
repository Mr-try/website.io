"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[924],{94441:function(B,b,t){t.r(b);var y=t(15009),p=t.n(y),E=t(99289),U=t.n(E),C=function(){var M=U()(p()().mark(function v(){var i,g,s,n,o,e,_,l,f,a,u,d,h,m,w,c,P;return p()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(i=4,g=document.querySelector("canvas"),s=window.navigator,n=window.GPUBufferUsage,s.gpu){r.next=6;break}throw new Error("WebGPU not supported on this browser.");case 6:return r.next=8,s.gpu.requestAdapter();case 8:if(o=r.sent,o){r.next=11;break}throw new Error("No appropriate GPUAdapter found.");case 11:return r.next=13,o.requestDevice();case 13:e=r.sent,_=g.getContext("webgpu"),l=s.gpu.getPreferredCanvasFormat(),_.configure({device:e,format:l}),f=e.createCommandEncoder(),a=f.beginRenderPass({colorAttachments:[{view:_.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:.4,a:1},loadOp:"clear",storeOp:"store"}]}),u=new Float32Array([-.8,-.8,.8,-.8,.8,.8,-.8,-.8,.8,.8,-.8,.8]),d=e.createBuffer({label:"Cell vertices",size:u.byteLength,usage:n.VERTEX|n.COPY_DST}),e.queue.writeBuffer(d,0,u),h={arrayStride:8,attributes:[{format:"float32x2",offset:0,shaderLocation:0}]},m=e.createShaderModule({label:"Cell shader",code:`
    @vertex
    fn vertexMain(@location(0) pos: vec2f) ->
      @builtin(position) vec4f {
      return vec4f(pos, 0, 1);
    }

    @fragment
    fn fragmentMain() -> @location(0) vec4f {
      return vec4f(1, 0, 0, 1);
    }
    `}),w=e.createRenderPipeline({label:"Cell pipeline",layout:"auto",vertex:{module:m,entryPoint:"vertexMain",buffers:[h]},fragment:{module:m,entryPoint:"fragmentMain",targets:[{format:l}]}}),c=new Float32Array([i,i]),P=e.createBuffer({label:"Grid Uniforms",size:c.byteLength,usage:n.UNIFORM|n.COPY_DST}),e.queue.writeBuffer(P,0,c),a.setPipeline(w),a.setVertexBuffer(0,d),a.draw(u.length/2),a.end(),e.queue.submit([f.finish()]);case 33:case"end":return r.stop()}},v)}));return function(){return M.apply(this,arguments)}}();b.default=C}}]);
