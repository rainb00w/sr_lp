import { useEffect, useState } from 'react';
import { IconSelector } from '../helpers/icon-selector';
import s from '../styles/layout/header.module.scss';

export default function Header(): JSX.Element {
  const [small, setSmall] = useState(false);
  const [windowWidth, setWindowWidth] = useState(70);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setWindowWidth(120);
      } else {
        setWindowWidth(70);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setSmall(window.pageYOffset > windowWidth);
      });
    }
  }, []);

  let styles = '';
  let navigationStyles = ``;

  if (small) {
    styles = `${s.navigation}`;
    navigationStyles = `${s.header_style_nav_container} ${s.header_style_nav_container_fixed} `;
  } else {
    styles = ``;
    navigationStyles = `${s.header_style_nav_container}`;
  }

  return (
    <>
      <div className={styles}></div>

      <header id="home" className={s.header_style}>
        <div className={navigationStyles}>
          <div className={s.header_style_scale}>
            <a href="/" className={s.logo}>
              <IconSelector id="logo" />
              <span className={s.logo_color}>Finance </span> Ledger
            </a>
          </div>
          <nav>
            <ul className={s.header_style_nav}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#cases">Cases</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contant">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <h1 className={s.header_style_heading}>The Sky Is The Limit</h1>
        <h2 className={s.header_style_smaller_heading}>
          We provide world class financial assistance
        </h2>
        <button className={s.header_style_button}>
          <IconSelector id="button_arrow" />
          Read More
        </button>
      </header>
    </>
  );
}
