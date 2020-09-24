const path = require('path');

// function resolve(dir) {
//     return path.join(__dirname, dir);
// }
module.exports = {
    // lintOnSave: true,
    // chainWebpack: (config) => {
    //     config.resolve.alias
    //     .set('@', resolve('src'))
        
    // },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.apiopen.top/videoHomeTab',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}