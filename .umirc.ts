/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 00:09:47
 * @Description: 
 */
import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  outputPath: 'docs',
  npmClient: 'pnpm',
});
