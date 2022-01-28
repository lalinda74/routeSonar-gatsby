import * as React from "react";
import Header from '../components/header';
import Summary from '../components/page-sections/summary';
import Features from '../components/page-sections/features';

// markup
const HomePage = () => {
  return (
    <section className="container-fluid rs-main-wrapper">
      <Header></Header>
      <Summary></Summary>
      <Features></Features>
    </section>
  )
}

export default HomePage