/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 00:09:47
 * @Description: 
 */
import { defineConfig } from "umi";

export default defineConfig({
  // routes: [
  //   { path: "/", component: "index" },
  //   { path: "/docs", component: "docs" },
  // ],
  copy: [
    { from: 'CNAME', to: 'docs' }
  ],
  exportStatic: {},
  outputPath: 'docs',
  npmClient: 'pnpm',
  headScripts: [
    `window.addEventListener("resize", this.setFontSize);
    function setFontSize() {
      const designedWidth = 1440;
      const fontSize = document.documentElement.clientWidth / designedWidth
      document.documentElement.style.fontSize = fontSize * 10 + 'px';
    }
    setFontSize()`,
  ],
  theme: { '@primary-color': '#000000', '@step': '24px' }
});
