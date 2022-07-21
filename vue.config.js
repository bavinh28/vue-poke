const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})
// module.exports = {
//   resolve: {
//     fallback: { "timers": require.resolve('timers-browserify') }
//   },
// };