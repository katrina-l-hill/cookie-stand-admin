// code attributed to JB Tellez from class demo code


import Head from 'next/head'
// import { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReportTable from '../components/ReportTable';
import CreateForm from '../components/CreateForm';

import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';
import LoginForm from '../components/login-form'

export default function Home() {
  // Home is a functional component
  // name the functional component the same as you would a class
  // let [table_data, set_table_data] = useState([]);

  // function formSubmit(location_info) {
  //   set_table_data([...table_data, location_info])
  // }

  // return (
  //   <>
  //     <Head>
  //       <title>Cookie Stand Admin</title>
  //     </Head>
  //     <div>
  //       <Header />
  //       <main>
  //         <CreateForm formHandler={formSubmit} />
  //         <ReportTable table_data={table_data} />
  //       </main>
  //       <Footer />
  //     </div>
  //   </>
  // )

  const { user, login, logout } = useAuth();

  if (!user) return <LoginForm onSubmit={login} />

  return (
    < div className='bg-white' >
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      {
        user ?
          <CookieStandAdmin />
          :
          <Loginform onLogin={login} />
      }

    </div >
  );
}

function CookieStandAdmin() {

  const { resources, deleteResource } = useResource();

  return (
    <>
      <CookieStandForm />
      <CookieStandTable stands={resources || []} deleteStand={deleteResource} />
    </>
  );
}

function CookieStandForm() {

  const { user } = useAuth();
  const { createResource } = useResource();

  function handleSubmit(event) {
    event.preventDefault();
    const info = {
      location: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.minimum.value),
      maximum_customers_per_hour: parseInt(event.target.maximum.value),
      average_cookies_per_sale: parseFloat(event.target.average.value),
      owner: user.id,
    };
    createResource(info);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create Cookie Stand</legend>
        <input placeholder='location' name='location' />
        <input placeholder='minimum' name='minimum' />
        <input placeholder='maximum' name='maximum' />
        <input placeholder='average' name='average' />
        <button>create</button>
      </fieldset>
    </form>
  );
}

function CookieStandTable({ stands, deleteStand }) {
  return (
    <table className="my-8">
      <thead>
        <tr>
          <th>Location</th>
          <th>6 am</th>
          <th>7 am</th>
          <th>8 am</th>
          <th>9 am</th>
          <th>10 am</th>
          <th>11 am</th>
          <th>12 pm</th>
          <th>1 pm</th>
          <th>2 pm</th>
          <th>3 pm</th>
          <th>4 pm</th>
          <th>5 pm</th>
          <th>6 pm</th>
          <th>7 pm</th>
          <th>totals</th>
        </tr>
      </thead>
      <tbody>
        {stands.map(stand => (

          <CookieStandRow key={stand.id} info={stand} deleteStand={deleteStand} />
        ))}
      </tbody>
    </table>
  );
}

function CookieStandRow({ info, deleteStand }) {

  function clickHandler() {
    deleteStand(info.id);
  }

  if (info.hourly_sales.length == 0) {

    info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  return (
    <tr>
      <td>{info.location} <button onClick={clickHandler}><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg></button></td>
      {info.hourly_sales.map((slot, index) => <td key={index}>{slot}</td>)}
      <td>{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
    </tr>
  );
}


function Loginform({ onLogin }) {

  async function handleSubmit(event) {
    event.preventDefault();
    onLogin(event.target.username.value, event.target.password.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset autoComplete='off'>
        <legend>Log In</legend>
        <label htmlFor="username">Username</label>
        <input name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button>Log In</button>
      </fieldset>
    </form>
  );
}