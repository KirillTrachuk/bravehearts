import { useEffect } from "react";
import "./App.sass";

function App() {
  useEffect(() => {
    if (window.UnicornStudio?.isInitialized) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.36/dist/unicornStudio.umd.js";
    script.onload = () => {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    };
    (document.head || document.body).appendChild(script);
  }, []);

  return (
    <div data-us-project="T30weF4YIlz3NXlvJL2v" className="unicorn-wrapper">
      <img src="/dragonfly.png" alt="Dragonfly" className="unicorn-image" />
      <img src="/texture_2.png" alt="texture" className="texture_2" />
      <div className="unicorn-content">
        <div className="unicorn-content-top">
          <p className="desc-1">fsp:60</p>
          <div className="unicorn-content-top-center">
            <p className="desc-1">
              BRAVEHEART ENTERTAINMENT IS A GLOBAL STORYTELLING STUDIO BUILT FOR
              THE BOLD ● A HOME FOR VISIONARY CREATORS AND AUDIENCES WHO CRAVE
              CINEMATIC EXPERIENCES THAT MOVE THE SOUL AND EXPAND THE
              IMAGINATION ● WE CRAFT HIGH-CONCEPT, ELEVATED, AND EMOTIONALLY
              CHARGED STORIES THAT TRANSCEND BORDERS, IGNITE DIALOGUE AND
              CELEBRATE THE SHARED RHYTHM OF HUMANITY ● EVERY PROJECT WE CREATE,
              FROM SWEEPING ADVENTURE EPICS AND PSYCHOLOGICAL THRILLERS ● TO
              GROUNDED FANTASY WORLDS AND PREMIUM UNSCRIPTED NARRATIVES IS
              DRIVEN BY ONE UNSHAKABLE BELIEF: THAT POWERFUL STORY TELLING HAS
              NO BOUNDARIES.
            </p>
            <p className="desc-1">©2016 — ©2025</p>
          </div>
          <p className="desc-1">rec●</p>
        </div>
        <img src="/coming_soon.svg" alt="coming soon" className="coming-soon" />
        <div className="unicorn-content-bottom">
          <div className="unicorn-content-bottom-text">
            <img src="/Braveheart.svg" alt="Braveheart" />
          </div>
        </div>
      </div>
      <div className="unicorn-content-bottom-line">
        <p className="label-1">World-Makers</p>
        <img src="/decor_1.svg" alt="decor_1" className="decor-line" />
        <p className="label-1">Vision</p>
        <div className="entertainment">
          <img src="/dragonfly_logo.svg" alt="dragonfly_logo" />
          <p className="label-1">entertainment</p>
          <img src="/dragonfly_logo.svg" alt="dragonfly_logo" />
        </div>
        <p className="label-1">Craft</p>
        <img src="/decor_2.svg" alt="decor_1" className="decor-line next" />
        <p className="label-1">Alive Motion</p>
      </div>
      <img src="/texture_1.png" alt="texture" className="texture_1" />
    </div>
  );
}

export default App;
