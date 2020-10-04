import React, { useEffect, useRef, useCallback } from 'react';
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from '@ap.cx/react-fullpage';
import useWindowSize from './hooks/useWindowSize';
import './App.scss';
import { data as people } from './data';
import { Leaf1, Leaf2, Leaf3 } from './leafs/leafs';

// import LogoMot from '../public/LogoMot.svg';
// import LogoFh from '../public/fhlogo.svg';

function App() {
  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // useEffect(() => {
  //   let vh = window.innerHeight * 0.01;
  // }, []);
  // Scrolling
  const skewScrolling = useCallback(() => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;
    // const skew = velocity * 20;
    //Assign skew and smooth scrolling to the scroll container
    // scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  }, [data, size.width]);
  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, [skewScrolling]);

  //set the height of the body.
  useEffect(() => {
    console.log(scrollContainer.current.clientHeight);
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    // document.body.style.height = `${
    //   scrollContainer.current.getBoundingClientRect().height
    // }px`;
  };

  return (
    <div ref={app}>
      {/* <Leaf2 width="100vw" height="200vh" style={{ overflow: 'hidden' }} /> */}
      {/* <div className="leaf-container">
        <Leaf1 />
        <Leaf1 />
        <Leaf1 />
      </div> */}
      <Fullpage>
        <FullPageSections ref={scrollContainer}>
          <FullpageSection
            style={{
              padding: '1rem',
              height: '100vh',
              display: 'grid',
              placeItems: 'center',
              position: 'relative',
            }}
          >
            <h1>
              6D
              <br />
              Das Sind Wir!
            </h1>
            <Leaf2 className="bigleaf" />
          </FullpageSection>
          <FullpageSection
            style={{
              padding: '1rem',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <h2 className="mask">
              wear a<br />
              mask.
            </h2>
          </FullpageSection>
          <FullpageSection
            style={{
              padding: '1rem',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <div className="hero">
              <ol>
                <li>Julia Margreiter</li>
                <li>Luca Mathis</li>
                <li>Juliane Mohr</li>
                <li>Renato Mendes Nunes</li>
                <li>Matthias Oberholzer</li>
              </ol>
            </div>
          </FullpageSection>
          {people.map(({ name, writtenBy, img, text }, idx) => (
            <React.Fragment key={name}>
              <FullpageSection
                style={{
                  padding: '1rem',
                  display: 'grid',
                  placeItems: 'center',
                  height: '100vh',
                }}
              >
                <div className="heading">
                  <h2 dangerouslySetInnerHTML={{ __html: name }}></h2>
                  <p className="writtenBy">beschrieben von {writtenBy}</p>
                  <Leaf1 className="leaf1" />
                </div>
              </FullpageSection>
              <FullpageSection
                style={{
                  padding: '1rem',
                  display: 'grid',
                  placeItems: 'center',
                  height: '100vh',
                }}
              >
                {/* <div className="image"> */}
                <img src={img} alt={name} className="fullpage-img" />
                {/* <Leaf3 className="leaf2 left" /> */}
                {/* <Leaf3 className="leaf2 right" /> */}
                {/* </div> */}
              </FullpageSection>
              <FullpageSection
                style={{
                  padding: '1rem',
                  display: 'grid',
                  placeItems: 'center',
                  height: '100vh',
                  position: 'relative',
                }}
              >
                <div className="hero">
                  <p dangerouslySetInnerHTML={{ __html: text }}></p>
                </div>
                <Leaf3 className="leaf-text" />
              </FullpageSection>
              {/* {!(idx % 2) && <Leaf2 />} */}
            </React.Fragment>
          ))}
          <FullpageSection
            style={{
              padding: '1rem 2rem 5rem',
              display: 'grid',
              placeItems: 'start',
              height: '80vh',
              position: 'relative',
            }}
          >
            <Leaf2 className="bigleaf bottom" />
            <footer>
              <p>
                A website by{' '}
                <a
                  href="https://matthiasoberholzer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matthias Oberholzer
                </a>
                <br />
                <small>
                  <a
                    href="https://www.instagram.com/matthias.oberholzer/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ig: @matthias.oberholzer
                  </a>
                </small>
                <br />
                <small>
                  <a
                    href="https://twitter.com/motcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tw: @motcodes
                  </a>
                </small>
                <br />
                <small>
                  <a
                    href="https://github.com/motcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    gh: @motcodes
                  </a>
                </small>
              </p>
              <div className="logo-container">
                <a
                  href="https://matthiasoberholzer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logo"
                    src="LogoMot.svg"
                    alt="Matthis Oberholzer Logo"
                  />
                </a>
                <a
                  href="https://fh-salzburg.ac.at/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="logo"
                    src="fhlogo.svg"
                    alt="FH Salzburg Logo"
                  />
                </a>
              </div>
            </footer>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
      {/* </div> */}
    </div>
  );
}

export default App;

const skeyScroll = ({ app, scrollContainer }) => (
  <div ref={app} className="App">
    <div ref={scrollContainer} className="scroll">
      <div className="hero">
        <h1>
          6D
          <br />
          Das Sind Wir!
        </h1>
      </div>
      <div className="hero">
        <h2 className="mask">
          wear a<br />
          mask.
        </h2>
      </div>
      <div className="hero">
        <ol>
          <li>Julia Margreiter</li>
          <li>Luca Mathis</li>
          <li>Juliane Mohr</li>
          <li>Renato Mendes Nunes</li>
          <li>Matthias Oberholzer</li>
        </ol>
      </div>
      {/* {images.map((image, index) => ( */}
      {/* <React.Fragment key={index}> */}
      <div className="hero last-bottom">
        <h2>
          Matthias
          <br />
          Oberholzer
        </h2>
        <p className="writtenBy">beschrieben von Matthias Oberholzer</p>
      </div>
      <div className="container">
        <img src={'https://source.unsplash.com/nOT-ZGevv_4'} alt={`people`} />
      </div>
      <div className="container last-top">
        <p>
          My name is Matthias M. Oberholzer. I currently live in Schleedorf, a
          small village in Austria, not to be confused with Australia. I visited
          the department of electronics and technical informatics at the higher
          technical education institute of Salzburg, where I graduated in 2019.
          Midway thru my third school year, I started to develop a passion for
          drawing &amp; designing things. Later on for photography too.
        </p>
      </div>
      <hr />
      {/* </React.Fragment> */}
      {/* ))} */}
    </div>
  </div>
);
