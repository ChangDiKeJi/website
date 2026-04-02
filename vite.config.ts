import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';
import {isDev, isProd, mode} from "./src/ts/env/packMode.node.ts";
import renderMode from "./src/ts/env/renderMode.node.ts";
import {createHtmlPlugin} from "vite-plugin-html";
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";

const distPath=path.resolve(__dirname, 'dist');

export default defineConfig(({}) => {
    console.log(`当前模式：${mode}\nisDev: ${isDev}\nisProd: ${isProd}`);
    console.log(`当前渲染模式：${renderMode}`);

    return {
        plugins: [
            vue(),
            createSvgIconsPlugin({
                iconDirs: [
                    path.resolve(__dirname, 'src/assets/_svg'),
                ],
                symbolId: 'svg-[dir]-[name]',
                customDomId: '__svg__icons__dom__',
                //使用示例：<svg width="16" height="16"><use xlink:href="#svg-bsi-telephone"></use></svg>
            }),
            createHtmlPlugin({
                minify: true,
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    //静默警告，避免bootstrap报一大堆警告
                    quietDeps: true,//静默所有依赖警告
                    silenceDeprecations: [
                        'import',//静默@import的警告
                        'color-functions',//静默red()/blue()的警告
                        'global-builtin',//静默mix()等函数的警告
                        'if-function',//静默if()的警告
                    ]
                }
            },
        },
        ssgOptions: renderMode == 'ssg' ? {
            onFinished() {
                {
                    const targetPath = path.join(distPath, '.vite');
                    if (fs.existsSync(targetPath)) {
                        fs.rmSync(targetPath, {recursive: true, force: true});
                        console.log(`[vite.config.ts] 已删除${targetPath}`);
                    }
                }
            }
        } : {},
    };
})
