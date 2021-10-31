import Link from 'next/link';
import Layout from '../../components/Layout/Layout';

export default function FirstPost() {
  return (
    <Layout pageTitle="Detail Posts">
      <h1 className="title">First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
    </Layout>
  );
}
