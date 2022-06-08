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
        <CookieStandForm onSubmit={formHandler} />
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

function CookieStandForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="w-full max-w-screen-lg p-3 px-5 my-10 rounded-md bg-emerald-300">
      <h1 className="text-2xl font-medium text-center">Create Cookie Stand</h1>
      <div className="flex flex-wrap">
        <div className="w-full px-3 mb-5">
          <label className="text-sm font-bold tracking-wide text-gray-700">Location</label>
          <input className="w-full px-4 py-3 text-gray-700 placeholder-black rounded bg-gray-50 h-1/2" id="Location" type="string" placehoder="Barcelona" required='true />
        </div>
      </div>
      
      <div className="flex flex-wrap w-full mb-3">
        <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
          <label className="text-sm font-bold tracking-wide text-gray-700">Minimum Customers Per Hour</label>
          <input className="w-full px-4 py-3 text-gray-700 placeholder-black rounded bg-gray-50 h-1/2" id="MinimumCustomersPerHour" type="text" placehoder="4" required='true />
        </div>

        <div className="flex flex-wrap w-full mb-3">
          <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
            <label className="text-sm font-bold tracking-wide text-gray-700">Maximum Customers Per Hour</label>
            <input className="w-full px-4 py-3 text-gray-700 placeholder-black rounded bg-gray-50 h-1/2" id="MaximumCustomersPerHour" type="text" placehoder="4" required='true/>
        </div>

        <div className="flex flex-wrap w-full mb-3">
          <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
            <label className="text-sm font-bold tracking-wide text-gray-700">Average Cookies PerHour</label>
            <input className="w-full px-4 py-3 text-gray-700 placeholder-black rounded bg-gray-50 h-1/2" id="AverageCookiesPerHour" type="float" placehoder="2.5" required='true />
          </div>

          <div className="flex flex-wrap w-full mb-3"></div>
          <button type="submit" className="block w-full h-full font-bold text-gray-700 rounded-md bg-emerald-500 ">
            Create
          </button>
        </div>
      </div>
    </form>
  )
}

function ShowJSON({ standData }) {
  console.log(JSON.stringify(standData));
  return (
    <div>
      {JSON.stringify(standData) == '{"standData":[]}' ? "Enter A New Stand" : <p>{JSON.stringify(standData)}</p>}
    </div>
  )
}

function Footer({ props }) {
  return (
    <footer className="px-8 py-4 font-medium text-gray-900 bg-emerald-500">
      <p>&copy;{props.copyright}</p>
    </footer>
  )
}
