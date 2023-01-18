import Fastify from 'fastify'
import cors from '@fastify/cors'

const app = Fastify()

app.register(cors)

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP server running')
})