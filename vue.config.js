// module.exports = {
//     devServer: {
//         proxy: {
//             '/user-api': {
//                 target: process.env.VUE_APP_DEV_PROXY_TARGET,
//                 pathRewrite: {
//                     '^/user-api': ''
//                 }
//             },
//             '/question-api': {
//                 target: process.env.VUE_APP_DEV_PROXY_TARGET,
//                 pathRewrite: {
//                     '^/question-api': ''
//                 }
//             },
//             '/course-api': {
//                 target: process.env.VUE_APP_DEV_PROXY_TARGET,
//                 pathRewrite: {
//                     '^/course-api': ''
//                 }
//             },
//             '/mirror-browser': {
//                 target: process.env.VUE_APP_MIRROR_PLAYER_PROXY_URL
//             }
//             // ,
//             // '/mirror-api': {
//             //     target: process.env.VUE_APP_MIRROR_PLAYER_SERVER_PROXY_URL,
//             //     pathRewrite: {
//             //         '^/mirror-api': ''
//             //     }
//             // }
//         }
//     }
// }
