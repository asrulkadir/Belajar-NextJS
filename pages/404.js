import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  return (
    <div>
      <h1 className="title-not-found">Halaman yang anda cari tidak ada</h1>
    </div>
  );
}
