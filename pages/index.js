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
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className='flex flex-col items-center py-4 space-y-8'>
        <CookieStandForm onSubmit={inputHandler} />
        <Main data={state} />
      </main>
      <Footer copyright="2022" />
    </>
  );

  function formHandler(event) {
    event.preventDefault();
    let newStand = {
      Location: event.target.Location.value,
      minCustomers: event.target.MinimumCustomersPerHour.value,
      maxCustomers: event.target.MaximumCustomersPerHour.value,
      avgCookies: event.target.AverageCookiesPerHour.value,
    };
    setState(newStand);
    event.target.reset();
  }
}

function Header() {
  return (
    <header className='px-8 py-6 text-4xl text-black bg-emerald-500'>
      <h1>Cookie Stand Admin</h1>
    </header>
  )
}

function Main(props) {
  return (
    <main className="flex flex-col items-center py-4 pt-6 space-y-8">
      <CookieForm onSubmit={props.formHandler} />
      <p className="text-gray-500 text-md">Report Table Coming Soon...</p>
      <ReportTable
        standData={props.standData} />
    </main>
  )
}

function Footer({ copyright }) {
  return (
    <footer className="px-8 py-6 text-black">
      <p>&copy;{copyright}</p>
    </footer>
  )
}
