import React from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
//import Portfolio from './components/portfolio';
import Footer from './components/footer';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <Header/>
        <About/>
        <Resume/>
        {/* <Portfolio/> */}
        <Footer/>
      </I18nextProvider>
    </div>
  );
}

export default App;
