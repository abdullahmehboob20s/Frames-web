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
    <div className="min-h-screen ">
      <div className="relative z-[1] overflow-visible pb-[150px]  mb-8">
        {/* <div className="gradient-bg-welcome"></div> */}
        {/* <div className="absolute inset-0 z-[-5] bg-center bg-[url(assets/images/footer-blob.png)]"></div> */}

        <div className="mb-3 lg:mb-8">
          <Navbar />
        </div>
        <div className="mb-10 lg:mb-16">
          <Welcome />
        </div>
        <NFTS />
      </div>
      <div className="mb-[150px]">
        <About />
      </div>
      {/* <div className="mb-[100px]">
        <Roadmap />
      </div>
      <div className="mb-[150px]">
        <Team />
      </div>
      <div className="mb-[150px]">
        <JoinUsOnDiscord />
      </div>

      <div className="relative z-[1] overflow-visible pt-[50px] pb-[100px]">
        <div className="bg-no-repeat bg-cover absolute inset-0 z-[-5] bg-[url(assets/images/footer-blob.png)]"></div>
        <div className="mb-[100px]">
          <Faq />
        </div>
        <div>
          <Footer />
        </div>
      </div> */}
    </div>
  );
}

export default App;
