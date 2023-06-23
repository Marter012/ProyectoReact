import React from 'react'
import Layout from '../src/components/Layout/Layout'
import NavBar from '../src/components/Navbar/Navbar'
import Routes from './routes/Routes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Layout>
      <NavBar/>
      <Routes/>
      <Footer/>
    </Layout>
  );
}

export default App;
