import { useEffect, useState } from "react";
import "./App.sass";

function App() {
  const [fps, setFps] = useState(60);
  const [isPreloaderReady, setIsPreloaderReady] = useState(false);

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

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const min = 30;
      const max = 60;
      const value = Math.floor(Math.random() * (max - min + 1)) + min;
      setFps(value);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setIsPreloaderReady(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <div
        className={`preloader ${isPreloaderReady ? "preloader--ready" : ""}`}
      >
        <div className="preloader__inner">
          <div className="preloader__logo">
            <img
              src="/dragonfly_empty.svg"
              alt="Dragonfly empty"
              className="preloader__logo-outline"
            />
            <img
              src="/dragonfly_logo.svg"
              alt="Dragonfly fill"
              className="preloader__logo-fill"
            />
          </div>
        </div>
      </div>

      <div data-us-project="T30weF4YIlz3NXlvJL2v" className="unicorn-wrapper">
        <img src="/dragonfly.png" alt="Dragonfly" className="unicorn-image" />
        <img src="/texture_2.png" alt="texture" className="texture_2" />
        <div className="unicorn-content">
          <div className="unicorn-content-top">
            <p className="desc-1">
              fps:
              <span className="fps-value desc-1">{fps}</span>
            </p>
            <div className="unicorn-content-top-center">
              <p className="desc-1 desc-1--desktop">
                BRAVEHEART ENTERTAINMENT IS A GLOBAL STORYTELLING STUDIO BUILT
                FOR THE BOLD ● A HOME FOR VISIONARY CREATORS AND AUDIENCES WHO
                CRAVE CINEMATIC EXPERIENCES THAT MOVE THE SOUL AND EXPAND THE
                IMAGINATION ● WE CRAFT HIGH-CONCEPT, ELEVATED, AND EMOTIONALLY
                CHARGED STORIES THAT TRANSCEND BORDERS, IGNITE DIALOGUE AND
                CELEBRATE THE SHARED RHYTHM OF HUMANITY ● EVERY PROJECT WE
                CREATE, FROM SWEEPING ADVENTURE EPICS AND PSYCHOLOGICAL
                THRILLERS ● TO GROUNDED FANTASY WORLDS AND PREMIUM UNSCRIPTED
                NARRATIVES IS DRIVEN BY ONE UNSHAKABLE BELIEF: THAT POWERFUL
                STORY TELLING HAS NO BOUNDARIES.
              </p>
              <p className="desc-1 desc-1--mobile">
                BRAVEHEART ENTERTAINMENT IS A GLOBAL STORYTELLING STUDIO BUILT
                FOR THE BOLD ● A HOME FOR VISIONARY CREATORS AND AUDIENCES WHO
                CRAVE CINEMATIC EXPERIENCES THAT MOVE THE SOUL AND EXPAND THE
                IMAGINATION
              </p>
              <p className="desc-1 years">©2016 — ©2025</p>
            </div>
            <p className="desc-1">
              rec <span className="rec-dot"> ●</span>{" "}
            </p>
          </div>
          <div className="coming-soon-row">
            <span className="plus-icon">+</span>
            <img
              src="/coming_soon.svg"
              alt="coming soon"
              className="coming-soon"
            />
            <span className="plus-icon">+</span>
          </div>
          <div className="unicorn-content-bottom">
            <div className="unicorn-content-bottom-text">
              <picture>
                <source
                  srcSet="/mobile_braveheart.svg"
                  media="(max-width: 640px)"
                />
                <img src="/Braveheart.svg" alt="Braveheart" />
              </picture>
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
    </>
  );
}

export default App;
