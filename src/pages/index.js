import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/site');
  }, []);
  return <p>redirecionando</p>;
};

export default Home;
