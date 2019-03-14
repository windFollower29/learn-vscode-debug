const Koa = require('koa')

const app = new Koa

// app.use(async (ctx, next) => {
//   console.log('node-attach')
//   ctx.body = 'node-attach'
// })

app.use((ctx, next) => {
  console.log('--')
})

app.listen(5000, () => {
  console.log('app is servered on port 5000')
})