import { useRouter } from 'next/dist/client/router';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/Users.module.css';

export default function index(props) {
  const { dataUsers } = props;
  const router = useRouter();
  console.log(dataUsers);

  return (
    <Layout pageTitle="Users">
      {dataUsers.map((user) => (
        <div key={user.id} className={styles.card}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <button
            type="button"
            onClick={() => router.push(`/users/${user.id}`)}
          >
            Detail User
          </button>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
