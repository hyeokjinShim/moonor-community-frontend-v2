import {NextPage} from 'next';
import {Button} from '@mui/material';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Custom</title>
      </Head>
      <div>Home</div>
      <Button variant="contained">Home</Button>
    </>
  );
};

export default Home;
