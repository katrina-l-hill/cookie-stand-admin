import Head from 'next/head'
// import { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';
import CreateForm from '../components/CreateForm';

export default function Home() {
  // Home is a functional component
  // name the functional component the same as you would a class

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <div>
        <Header />
        <main>
          <ReportTable />
          <CreateForm />
        </main>
        <Footer />
      </div>
    </>
  )
}