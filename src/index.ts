import { Hono } from 'hono'
import content from "./template.html";
const template = (text: string) => content.replace('%%text%%', text)
const app = new Hono<{ Bindings: { clipboard: KVNamespace } }>()
app.get('/', async (c) => c.html(template(await c.env.clipboard.get('clipboard-text') ?? '')))
app.post('/', async (c) => {
  const value = (await c.req.parseBody())['text'] as string
  await c.env.clipboard.put('clipboard-text', value)
  return c.html(template(value))
})
export default app
