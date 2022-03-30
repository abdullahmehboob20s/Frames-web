import React from "react";
import {
  Navbar,
  Footer,
  Welcome,
  NFTS,
  About,
  Roadmap,
  Team,
  JoinUsOnDiscord,
  Faq,
} from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome mb-28">
        <div className="mb-8">
          <Navbar />
        </div>
        <div className="mb-16">
          <Welcome />
        </div>
        <NFTS />
      </div>
      <div className="mb-[150px]">
        <About />
      </div>
      <div className="mb-[100px]">
        <Roadmap />
      </div>
      <div className="mb-[150px]">
        <Team />
      </div>
      <div className="mb-[200px]">
        <JoinUsOnDiscord />
      </div>
      <div className="mb-[150px]">
        <Faq />
      </div>
      <div className="mb-[100px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
