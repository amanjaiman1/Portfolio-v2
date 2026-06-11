import { useEffect, useState } from "react";

import {
  SmoothScroll,
  Cursor,
  Preloader,
  Navbar,
  Hero,
  About,
  Capabilities,
  Works,
  Experience,
  Testimonials,
  Contact,
  Footer,
} from "./components";

const App = () => {
  const [ready, setReady] = useState(false);

  // lock scroll while the preloader is on screen
  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  return (
    <SmoothScroll>
      {/* fixed atmosphere layers */}
      <div className="grain" aria-hidden />
      <Cursor />

      <Preloader onComplete={() => setReady(true)} />

      <Navbar />

      <main className="relative z-0">
        <Hero />
        <About />
        <Capabilities />
        <Works />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
};

export default App;
