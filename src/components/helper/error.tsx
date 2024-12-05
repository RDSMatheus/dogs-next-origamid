export default function ErrorMessage({ error }: { error: string }) {
  if (error === '') return null;
  return <p style={{ color: '#f31' }}>{error}</p>;
}
