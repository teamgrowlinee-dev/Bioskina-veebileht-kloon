# Bioskina veebileht kloon

Staatiline `bioskina.com` kloon, mis laeb chatboti eraldi Renderi teenusest.

## Kohalik preview

Serveeri [`public`](./public) kausta näiteks:

```bash
python3 -m http.server 4173 --directory public
```

Kui avad lehe `localhost` peal, kasutab chatbot lokaalselt `http://127.0.0.1:3000`.

## Deploy

- Netlify publish directory: `public`
- Chatboti Renderi baas-URL: `https://bioskina-chatbot.onrender.com`
