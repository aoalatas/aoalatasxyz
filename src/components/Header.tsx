import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from 'react-awesome-reveal';

import MainDataType from '../types/MainDataType'


type ComponentProps = {
    data : MainDataType
}

type ComponentState = {

}

class Header extends Component<ComponentProps, ComponentState>  {
    constructor(props: ComponentProps) {
        super(props);
    }

  render() {
    if (!this.props.data) return null;

    const blog = this.props.data.blog;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const avatarimage = "images/" +this.props.data.avatarimage;
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade>
              <img className="profile-pic" src={avatarimage} alt="Avatar" />
            </Fade>
            <Fade>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade>
              <h3>{description}</h3>
            </Fade>
            <hr />
            <Fade>
              <ul className="social">
                <li>
                  <a href={blog} target="newtab" className="button btn project-btn">
                    <i className="fa fa-book"></i> Blog 
                  </a>
                  </li>
                  <li>
                  <a href={github} className="button btn github-btn">
                    <i className="fa fa-github"></i>Github
                  </a>
                  </li>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
