import Layout from '../../components/Layout/Layout';
import styles from '../../styles/Posts.module.css';

export default function Post(props) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Posts">
      {dataBlog.map((blog) => (
        <div key={blog.id} className={styles.card}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();
  return {
    props: {
      dataBlog,
    },
  };
}
