<!--
 * @Author: try try418@163.com
 * @Date: 2023-05-31 10:56:03
 * @Description:
-->

### monorepo 思考

#### 目录结构

```
---apps
  |___app1
  |___app2
  |___app3
---config
  |___eslint-config
  |___project-config
  |___tsconfig
---packages
  |___ui
  |___components
```

#### 思路

- 通用配置
- ui 组件
- 业务组件
- 结合 git submodule
- 如果中间添加 node 层则需要考虑 plugin 机制

#### 相关链接

- [Turborepo](https://turbo.build/repo/docs)
- [Rush Stack](https://rushstack.io/zh-cn/)
