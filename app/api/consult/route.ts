import { Pool } from 'pg';

// Configuração da conexão com o PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ecom-next',
  password: 'saulo',
  port: 5432,
});

export async function GET(req: any) {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get('slug');

    if (!slug) {
      return null
    }

    const result = await pool.query(`SELECT * FROM selection_products WHERE fk_product = ${slug}`);

    return new Response(JSON.stringify(result.rows), { status: 200 });
  } catch (err) {
    console.error('Erro ao consultar o banco de dados', err);
    return new Response(JSON.stringify({ message: 'Erro interno no servidor' }), { status: 500 });
  }
}
