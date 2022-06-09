import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';
import CreateForm from '../components/CreateForm';

export default function Home() {
  // Home is a functional component
  // name the functional component the same as you would a class
  let [table_data, set_table_data] = useState([]);

  function formSubmit(location_info) {
    set_table_data([...table_data, location_info])
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <div>
        <Header />
        <main>
          <CreateForm formHandler={formSubmit} />
          <ReportTable table_data={table_data} />
        </main>
        <Footer />
      </div>
    </>
  )
}