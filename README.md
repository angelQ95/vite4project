# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

-----------------------------  
package.json中依赖作用详解  

1:@types/node
path路径可以使用@，需要在vite.config.ts，tsconfig.json中进行配置才生效。
2:
eslint-config-prettier:
首先我们需要使用 eslint-config-prettier 来关掉 (disable) 所有和 Prettier 冲突的 ESLint 的配置（这部分配置就是上面说的，格式问题的配置，所以关掉不会有问题），方法就是在 .eslintrc 里面将 prettier 设为最后一个 extends

// .eslintrc    
{      
    "extends": ["prettier"] // prettier 一定要是最后一个，才能确保覆盖    
}

3:eslint-plugin-prettier
将 prettier 的 rules 以插件的形式加入到 ESLint 里面。这里插一句，为什么"可选" ？当你使用 Prettier + ESLint 的时候，其实格式问题两个都有参与，disable ESLint 之后，其实格式的问题已经全部由 prettier 接手了。那我们为什么还要这个 plugin？其实是因为我们期望报错的来源依旧是 ESLint ，使用这个，相当于把 Prettier 推荐的格式问题的配置以 ESLint rules 的方式写入，这样相当于可以统一代码问题的来源。

// .eslintrc    
{      
    "plugins": ["prettier"],      
    "rules": {        
        "prettier/prettier": "error"      
    }    
}

将2与3和在一起，为以下配置：

// .eslintrc
{
  "extends": ["plugin:prettier/recommended"]
}