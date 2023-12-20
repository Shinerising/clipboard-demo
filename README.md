# A small online clipboard demo based on Cloudflare worker & hono framework.

## How to use

1. Create a KV namespace with the name "clipboard" in Cloudflare dashboard, then copy the id
2. Clone this Repository
3. Rename `wrangler.example.toml` to `wrangler.toml`
4. Replace the <KV_ID> in `wrangler.toml` with the KV id you just created
5. Run `npm install` to install npm dependencies
6. Run `npm run deploy` to deploy your worker
7. You're done, now you can check the worker in Cloudflare dashboard and get the URL for visiting.
