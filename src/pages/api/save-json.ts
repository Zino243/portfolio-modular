import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const post: APIRoute = async ({ request }) => {
  try {
    // Obtenemos el JSON enviado por el cliente
    const data = await request.json();

    // Ruta absoluta al archivo JSON
    const filePath = path.resolve('./src/data/information.json');

    // Guardamos en disco
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

    // Devolvemos JSON al cliente
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
