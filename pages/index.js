import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  // Home is a functional component
  // name the functional component the same as you would a class
  const [state, setState] = useState({
    standData: [],
  });

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</>
      </Head>

    </>
  );
}
