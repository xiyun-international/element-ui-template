# 禧云 element-ui-template

#### git commit message 规范

本项目框架默认在执行 git commit 的时候调用了 hook 来检查提交消息的规范，
意味着你在执行`git commit -am'feat: 增加新功能'`时，消息必须要写相应的前缀来标明这次提交的类型。
类型可选项有：     
- feat：新增 feature
- fix: 修复 bug
- docs: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE等等
- style: 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
- refactor: 代码重构，没有加新功能或者修复 bug
- perf: 优化相关，比如提升性能、体验
- test: 测试用例，包括单元测试、集成测试等
- chore: 改变构建流程、或者增加依赖库、工具等
- revert: 回滚到上一个版本

如果你不需要这个规范，可以在 `package.json` 中删除掉以下内容：
```json
{
  "gitHooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E GIT_PARAMS"
  },
  "lint-staged": {
    "*.js": [
      "prettier --write",
      "vue-cli-service lint --mode production",
      "git add"
    ],
    "*.vue": [
      "prettier --write",
      "vue-cli-service lint --mode production",
      "git add"
    ]
  }
}
```
