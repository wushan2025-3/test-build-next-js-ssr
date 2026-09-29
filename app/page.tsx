export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Dynamic Next.js (SSR)</h1>
      <p>Hello from a server-side rendered Next.js project.</p>
      <p>Rendered at: {new Date().toISOString()}</p>
    </main>
  );
}
