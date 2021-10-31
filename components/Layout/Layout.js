import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.css';

export default function Layout(props) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NextJS | {pageTitle}</title>
        <meta name="description" content="NextJS Basic Indonesia" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
