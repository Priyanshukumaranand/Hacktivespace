import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'tw-elements-react/dist/css/tw-elements-react.min.css';
import {SearchBar} from '../SearchBar/SearchBar';


export default function Header() {
    return (
        <header class="global-header glue-header glue-header--single not-glue">
        <a href="#page-content" class="glue-header__skip-content">Jump to Content</a>
        <div class="glue-header__bar glue-header__bar--mobile not-glue">
          <div class="glue-header__tier not-glue">
            {/* mobile lockup component */}
            <div class="glue-header__container">
              <div class="glue-header__lock-up">
                {/* Hamburger button component */}
                <div class="glue-header__hamburger">
                  <button class="glue-header__drawer-toggle-btn" aria-label="Open the navigation drawer">
                    <svg class="glue-icon glue-icon--24px" role="presentation" aria-hidden="true">
                      <use href="static/assets/icons/glue-icons.svg#menu"></use>
                    </svg>
                  </button>
                </div>
                <div class="glue-header__logo">
                  <a class="glue-header__logo-link" href="/" title="Google Research">
                    {/* Logo component */}
                    <div class="glue-header__logo-container">
    
    
    
    
    
    
    
                      <svg role="presentation" aria-hidden="true" alt="Google"
                        class="glue-icon  glue-icon glue-header__logo-svg">
                        <use href="static/assets/icons/glue-icons.svg#google-color-logo"></use>
                      </svg>
    
    
    
                    </div>
                    <span class="glue-header__logo--product">Research</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="glue-header__bar glue-header__bar--desktop glue-header__drawer">
          <div class="glue-header__tier">
            {/* desktop lockup component */}
            <div class="glue-header__container">
              <div class="glue-header__lock-up">
                <div class="glue-header__logo">
                  <a class="glue-header__logo-link" href="/" title="Google Research">
                     {/* Logo component  */}
                    <div class="glue-header__logo-container">
    
    
    
    
    
    
                      <svg role="presentation" aria-hidden="true" alt="Google"
                        class="glue-icon  glue-icon glue-header__logo-svg not-glue --dark-logo">
                        <use href="static/assets/icons/glue-icons.svg#google-solid-logo"></use>
                      </svg>
    
    
    
    
    
    
    
                      <svg role="presentation" aria-hidden="true" alt="Google"
                        class="glue-icon  glue-icon glue-header__logo-svg --light-logo">
                        <use href="static/assets/icons/glue-icons.svg#google-color-logo"></use>
                      </svg>
    
                    </div>
                    <span class="glue-header__logo--product">Research</span>
                  </a>
                </div>
              </div>
            </div>
            {/* linkbar component */}
            <div class="glue-header__container glue-header__container--linkbar">
              <nav class="glue-header__link-bar navigation js-gt-global-nav-wrapper">
                <ul class="glue-header__list">
    
    
    
    
    
    
    
                  <li class="glue-header__item  js-sub-nav-parent --parent" data-gt-primary="Who we are">
    
                    <button class="glue-header__link js-sub-nav-target" aria-haspopup="true" aria-expanded="false">
    
                      <span class="">
                        Who we are
    
                        <span class="icon icon--caret"></span>
    
                      </span>
    
                    </button>
    
    
                    <div class="navigation__sub js-sub-nav" role="menu">
                      <div class="navigation__sub__container">
                        <div class="navigation__sub__mobile-heading">
                          <button class="glue-header__link js-sub-nav-close-mobile">
                            <span class="sr-text">Back to</span>
                            <span class="icon icon--caret"></span> Who we are
                            <span class="sr-text">menu</span>
                          </button>
                          <hr />
                        </div>
                        <div class="block-nav_drawer_columns_content">
    
                          <div class="navigation__sub--content"
                            data-gt-secondary="Defining the technology of today and tomorrow.">
                            <div class="navigation__sub__wrapper">
    
                              <div class="navigation__sub__heading">
                                <h2 class="headline-3">Defining the technology of today and tomorrow.</h2>
    
                              </div>
    
    
                              <ul class="navigation__sub__columns">
    
    
    
                                <li data-gt-secondary="Philosophy">
                                  <div class="navigation__sub__columns__desktop">
    
                                    <h2 class="headline-6 navigation__sub__columns__heading">
                                      Philosophy
                                    </h2>
    
                                    <p class="navigation__sub__columns__description caption">We strive to create an
                                      environment conducive to many different types of research across many different time
                                      scales and levels of risk.</p>
    
                                    <a href="https://rjgexdcZW3KS.google/philosophy/"
                                      class="glue-inline-link js-drawer-link">
                                      <span class="sr-text">Learn more about our Philosophy</span>
                                      <span aria-hidden="true">Learn more</span>
                                    </a>
    
                                  </div>
                                  <div class="navigation__sub__columns__mobile">
    
                                    <a class="glue-header__link" href="https://rjgexdcZW3KS.google/philosophy/">
                                      Philosophy
                                    </a>
    
                                  </div>
                                </li>
    
    
    
    
                                <li data-gt-secondary="People">
                                  <div class="navigation__sub__columns__desktop">
    
                                    <h2 class="headline-6 navigation__sub__columns__heading">
                                      People
                                    </h2>
    
                                    <p class="navigation__sub__columns__description caption">Our researchers drive
                                      advancements in computer science through both fundamental and applied research.</p>
    
                                    <a href="https://rjgexdcZW3KS.google/people/" class="glue-inline-link js-drawer-link">
                                      <span class="sr-text">Learn more about our People</span>
                                      <span aria-hidden="true">Learn more</span>
                                    </a>
    
                                  </div>
                                  <div class="navigation__sub__columns__mobile">
    
                                    <a class="glue-header__link" href="https://rjgexdcZW3KS.google/people/">
                                      People
                                    </a>
    
                                  </div>
                                </li>
    
    
                              </ul>
    
    
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                  </li>
    
    
    
    
    
    
    
    
    
                  <li class="glue-header__item  js-sub-nav-parent --parent" data-gt-primary="Research areas">
    
                    <button class="glue-header__link js-sub-nav-target" aria-haspopup="true" aria-expanded="false">
    
                      <span class="">
                        Research areas
    
                        <span class="icon icon--caret"></span>
    
                      </span>
    
                    </button>
    
    
                    <div class="navigation__sub js-sub-nav" role="menu">
                      <div class="navigation__sub__container">
                        <div class="navigation__sub__mobile-heading">
                          <button class="glue-header__link js-sub-nav-close-mobile">
                            <span class="sr-text">Back to</span>
                            <span class="icon icon--caret"></span> Research areas
                            <span class="sr-text">menu</span>
                          </button>
                          <hr />
                        </div>
                        <div class="block-nav_drawer_columns_link_list">
    
    
                          <div class="navigation__sub--list">
                            <div class="navigation__sub__wrapper">
                              <ul class="navigation__sub__columns">
    
    
    
    
                                <li data-gt-secondary="Research areas">
                                  <div class="navigation__sub__columns__desktop">
    
                                    <h2 class="headline-6 navigation__sub__columns__heading">Research areas</h2>
    
    
    
                                    <ul>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/">
                                          Explore all research areas
                                        </a>
    
                                      </li>
    
                                    </ul>
    
                                  </div>
                                  <div class="navigation__sub__columns__mobile">
                                    <button class="glue-header__link js-sub-nav-target" data-panel="nested" role="menuitem"
                                      aria-haspopup="true">
                                      Research areas <span class="icon icon--caret"></span>
                                    </button>
    
                                    <div class="navigation__nested-sub js-sub-nav-parent">
    
                                      <div class="navigation__sub__mobile-heading">
                                        <button class="glue-header__link js-sub-nav-close-mobile" role="menuitem"
                                          aria-haspopup="true">
                                          <span class="sr-text">Back to</span>
                                          <span class="icon icon--caret"></span> Research areas
                                          <span class="sr-text">menu</span>
                                        </button>
                                        <hr />
                                      </div>
                                      <ul>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/"
                                            class="navigation__sub__columns__mobile__link">
                                            Explore all research areas
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                      </ul>
    
                                    </div>
                                  </div>
                                </li>
    
    
    
    
    
                                <li data-gt-secondary="Foundational ML & Algorithms">
                                  <div class="navigation__sub__columns__desktop">
    
                                    <h2 class="headline-6 navigation__sub__columns__heading">Foundational ML & Algorithms
                                    </h2>
    
    
    
                                    <ul>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/algorithms-and-theory/">
                                          Algorithms & Theory
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/data-management/">
                                          Data Management
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/data-mining-and-modeling/">
                                          Data Mining & Modeling
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/information-retrieval-and-the-web/">
                                          Information Retrieval & the Web
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/machine-intelligence/">
                                          Machine Intelligence
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/machine-perception/">
                                          Machine Perception
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/machine-translation/">
                                          Machine Translation
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/natural-language-processing/">
                                          Natural Language Processing
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/speech-processing/">
                                          Speech Processing
                                        </a>
    
                                      </li>
    
                                    </ul>
    
                                  </div>
                                  <div class="navigation__sub__columns__mobile">
                                    <button class="glue-header__link js-sub-nav-target" data-panel="nested" role="menuitem"
                                      aria-haspopup="true">
                                      Foundational ML & Algorithms <span class="icon icon--caret"></span>
                                    </button>
    
                                    <div class="navigation__nested-sub js-sub-nav-parent">
    
                                      <div class="navigation__sub__mobile-heading">
                                        <button class="glue-header__link js-sub-nav-close-mobile" role="menuitem"
                                          aria-haspopup="true">
                                          <span class="sr-text">Back to</span>
                                          <span class="icon icon--caret"></span> Foundational ML & Algorithms
                                          <span class="sr-text">menu</span>
                                        </button>
                                        <hr/>
                                      </div>
                                      <ul>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/algorithms-and-theory/"
                                            class="navigation__sub__columns__mobile__link">
                                            Algorithms & Theory
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/data-management/"
                                            class="navigation__sub__columns__mobile__link">
                                            Data Management
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/data-mining-and-modeling/"
                                            class="navigation__sub__columns__mobile__link">
                                            Data Mining & Modeling
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/information-retrieval-and-the-web/"
                                            class="navigation__sub__columns__mobile__link">
                                            Information Retrieval & the Web
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/machine-intelligence/"
                                            class="navigation__sub__columns__mobile__link">
                                            Machine Intelligence
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/machine-perception/"
                                            class="navigation__sub__columns__mobile__link">
                                            Machine Perception
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/machine-translation/"
                                            class="navigation__sub__columns__mobile__link">
                                            Machine Translation
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/natural-language-processing/"
                                            class="navigation__sub__columns__mobile__link">
                                            Natural Language Processing
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/speech-processing/"
                                            class="navigation__sub__columns__mobile__link">
                                            Speech Processing
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                      </ul>
    
                                    </div>
                                  </div>
                                </li>
    
    
    
    
    
                                <li data-gt-secondary="Computing Systems & Quantum AI">
                                  <div class="navigation__sub__columns__desktop">
    
                                    <h2 class="headline-6 navigation__sub__columns__heading">Computing Systems & Quantum AI
                                    </h2>
    
    
    
                                    <ul>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/distributed-systems-and-parallel-computing/">
                                          Distributed Systems & ParallelComputing
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/hardware-and-architecture/">
                                          Hardware & Architecture
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/mobile-systems/">
                                          Mobile Systems
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/networking/">
                                          Networking
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/quantum-computing/">
                                          Quantum Computing
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/robotics/">
                                          Robotics
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/security-privacy-and-abuse-prevention/">
                                          Security, Privacy, & AbusePrevention
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/software-engineering/">
                                          Software Engineering
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/software-systems/">
                                          Software Systems
                                        </a>
    
                                      </li>
    
                                    </ul>
    
                                  </div>
                                  <div class="navigation__sub__columns__mobile">
                                    <button class="glue-header__link js-sub-nav-target" data-panel="nested" role="menuitem"
                                      aria-haspopup="true">
                                      Computing Systems & Quantum AI <span class="icon icon--caret"></span>
                                    </button>
    
                                    <div class="navigation__nested-sub js-sub-nav-parent">
    
                                      <div class="navigation__sub__mobile-heading">
                                        <button class="glue-header__link js-sub-nav-close-mobile" role="menuitem"
                                          aria-haspopup="true">
                                          <span class="sr-text">Back to</span>
                                          <span class="icon icon--caret"></span> Computing Systems & Quantum AI
                                          <span class="sr-text">menu</span>
                                        </button>
                                        <hr />
                                      </div>
                                      <ul>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/distributed-systems-and-parallel-computing/"
                                            class="navigation__sub__columns__mobile__link">
                                            Distributed Systems & ParallelComputing
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/hardware-and-architecture/"
                                            class="navigation__sub__columns__mobile__link">
                                            Hardware & Architecture
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/mobile-systems/"
                                            class="navigation__sub__columns__mobile__link">
                                            Mobile Systems
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/networking/"
                                            class="navigation__sub__columns__mobile__link">
                                            Networking
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/quantum-computing/"
                                            class="navigation__sub__columns__mobile__link">
                                            Quantum Computing
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/robotics/"
                                            class="navigation__sub__columns__mobile__link">
                                            Robotics
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/security-privacy-and-abuse-prevention/"
                                            class="navigation__sub__columns__mobile__link">
                                            Security, Privacy, & AbusePrevention
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/software-engineering/"
                                            class="navigation__sub__columns__mobile__link">
                                            Software Engineering
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/software-systems/"
                                            class="navigation__sub__columns__mobile__link">
                                            Software Systems
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                      </ul>
    
                                    </div>
                                  </div>
                                </li>
    
    
    
    
    
                                <li data-gt-secondary="Science, AI & Society">
                                  <div class="navigation__sub__columns__desktop">
    
                                    <h2 class="headline-6 navigation__sub__columns__heading">Science, AI & Society</h2>
    
    
    
                                    <ul>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/climate-and-sustainability/">
                                          Climate & Sustainability
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/economics-and-electronic-commerce/">
                                          Economics & Electronic Commerce
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/education-innovation/">
                                          Education Innovation
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/general-science/">
                                          General Science
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/health-bioscience/">
                                          Health & Bioscience
                                        </a>
    
                                      </li>
    
                                      <li>
    
                                        <a class="navigation__sub__columns__list-link caption js-drawer-link"
                                          href="https://rjgexdcZW3KS.google/research-areas/human-computer-interaction-and-visualization/">
                                          Human-Computer Interaction and Visualization
                                        </a>
    
                                      </li>
    
                                    </ul>
    
                                  </div>
                                  <div class="navigation__sub__columns__mobile">
                                    <button class="glue-header__link js-sub-nav-target" data-panel="nested" role="menuitem"
                                      aria-haspopup="true">
                                      Science, AI & Society <span class="icon icon--caret"></span>
                                    </button>
    
                                    <div class="navigation__nested-sub js-sub-nav-parent">
    
                                      <div class="navigation__sub__mobile-heading">
                                        <button class="glue-header__link js-sub-nav-close-mobile" role="menuitem"
                                          aria-haspopup="true">
                                          <span class="sr-text">Back to</span>
                                          <span class="icon icon--caret"></span> Science, AI & Society
                                          <span class="sr-text">menu</span>
                                        </button>
                                        <hr/>
                                      </div>
                                      <ul>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/climate-and-sustainability/"
                                            class="navigation__sub__columns__mobile__link">
                                            Climate & Sustainability
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/economics-and-electronic-commerce/"
                                            class="navigation__sub__columns__mobile__link">
                                            Economics & Electronic Commerce
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/education-innovation/"
                                            class="navigation__sub__columns__mobile__link">
                                            Education Innovation
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/general-science/"
                                            class="navigation__sub__columns__mobile__link">
                                            General Science
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/health-bioscience/"
                                            class="navigation__sub__columns__mobile__link">
                                            Health & Bioscience
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                        <li role="menuitem">
    
                                          <a href="https://rjgexdcZW3KS.google/research-areas/human-computer-interaction-and-visualization/"
                                            class="navigation__sub__columns__mobile__link">
                                            Human-Computer Interaction and Visualization
                                            <span>
    
                                            </span>
                                          </a>
    
                                        </li>
    
                                      </ul>
    
                                    </div>
                                  </div>
                                </li>
    
    
                              </ul>
    
    
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                  </li>
    
    
    
    
    
    
    
    
    
                  <li class="glue-header__item  js-sub-nav-parent --parent" data-gt-primary="Our work">
    
                    <button class="glue-header__link js-sub-nav-target" aria-haspopup="true" aria-expanded="false">
    
                      <span class="">
                        Our work
    
                        <span class="icon icon--caret"></span>
    
                      </span>
    
                    </button>
    
    
                    <div class="navigation__sub js-sub-nav" role="menu">
                      <div class="navigation__sub__container">
                        <div class="navigation__sub__mobile-heading">
                          <button class="glue-header__link js-sub-nav-close-mobile">
                            <span class="sr-text">Back to</span>
                            <span class="icon icon--caret"></span> Our work
                            <span class="sr-text">menu</span>
                          </button>
                          <hr/>
                        </div>
                        <div class="block-nav_drawer_columns_content">
    
                          <div class="navigation__sub--content" data-gt-secondary="">
                            <div class="navigation__sub__wrapper">
    
    
                              <ul class="navigation__sub__columns">
    
    
    
                                <li data-gt-secondary="Projects">
                                  <div class="navigation__sub__columns__desktop">
    
                                    <h2 class="headline-6 navigation__sub__columns__heading">
                                      Projects
                                    </h2>
    
                                    <p class="navigation__sub__columns__description caption">We regularly open-source
                                      projects with the broader research community and apply our developments to Google
                                      products.</p>
    
                                    <a href="https://rjgexdcZW3KS.google/resources/our-projects/"
                                      class="glue-inline-link js-drawer-link">
                                      <span class="sr-text">Learn more about our Projects</span>
                                      <span aria-hidden="true">Learn more</span>
                                    </a>
    
                                  </div>
                                  <div class="navigation__sub__columns__mobile">
    
                                    <a class="glue-header__link" href="https://rjgexdcZW3KS.google/resources/our-projects/">
                                      Projects
                                    </a>
    
                                  </div>
                                </li>
    
    
    
    
                                <li data-gt-secondary="Publications">
                                  <div class="navigation__sub__columns__desktop">
    
                                    <h2 class="headline-6 navigation__sub__columns__heading">
                                      Publications
                                    </h2>
    
                                    <p class="navigation__sub__columns__description caption">Publishing our work allows us
                                      to share ideas and work collaboratively to advance the field of computer science.</p>
    
                                    <a href="https://rjgexdcZW3KS.google/pubs/" class="glue-inline-link js-drawer-link">
                                      <span class="sr-text">Learn more about our Publications</span>
                                      <span aria-hidden="true">Learn more</span>
                                    </a>
    
                                  </div>
                                  <div class="navigation__sub__columns__mobile">
    
                                    <a class="glue-header__link" href="https://rjgexdcZW3KS.google/pubs/">
                                      Publications
                                    </a>
    
                                  </div>
                                </li>
    
    
    
    
                                <li data-gt-secondary="Resources">
                                  <div class="navigation__sub__columns__desktop">
    
                                    <h2 class="headline-6 navigation__sub__columns__heading">
                                      Resources
                                    </h2>
    
                                    <p class="navigation__sub__columns__description caption">We make products, tools, and
                                      datasets available to everyone with the goal of building a more collaborative
                                      ecosystem.</p>
    
                                    <a href="https://rjgexdcZW3KS.google/resources/"
                                      class="glue-inline-link js-drawer-link">
                                      <span class="sr-text">Learn more about our Resources</span>
                                      <span aria-hidden="true">Learn more</span>
                                    </a>
    
                                  </div>
                                  <div class="navigation__sub__columns__mobile">
    
                                    <a class="glue-header__link" href="https://rjgexdcZW3KS.google/resources/">
                                      Resources
                                    </a>
    
                                  </div>
                                </li>
    
    
                              </ul>
    
    
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                  </li>
    
    
    
    
    
    
    
    
    
                  <li class="glue-header__item  js-sub-nav-parent --parent" data-gt-primary="Programs & events">
    
                    <button class="glue-header__link js-sub-nav-target" aria-haspopup="true" aria-expanded="false">
    
                      <span class="">
                        Programs & events
    
                        <span class="icon icon--caret"></span>
    
                      </span>
    
                    </button>
    
    
                    <div class="navigation__sub js-sub-nav" role="menu">
                      <div class="navigation__sub__container">
                        <div class="navigation__sub__mobile-heading">
                          <button class="glue-header__link js-sub-nav-close-mobile">
                            <span class="sr-text">Back to</span>
                            <span class="icon icon--caret"></span> Programs & events
                            <span class="sr-text">menu</span>
                          </button>
                          <hr/>
                        </div>
                        <div class="block-nav_drawer_columns_content">
    
                          <div class="navigation__sub--content" data-gt-secondary="Shaping the future, together.">
                            <div class="navigation__sub__wrapper">
    
                              <div class="navigation__sub__heading">
                                <h2 class="headline-3">Shaping the future, together.</h2>
    
                                <a href="https://rjgexdcZW3KS.google/programs-and-events/" class="js-drawer-link">
                                  Collaborate with us
                                </a>
    
                              </div>
    
    
                              <ul class="navigation__sub__columns">
    
    
    
                                <li data-gt-secondary="Student programs">
                                  <div class="navigation__sub__columns__desktop">
    
                                    <h2 class="headline-6 navigation__sub__columns__heading">
                                      Student programs
                                    </h2>
    
                                    <p class="navigation__sub__columns__description caption">Supporting the next generation
                                      of researchers through a wide range of programming.</p>
    
                                    <a href="https://rjgexdcZW3KS.google/programs-and-events/student-engagement/"
                                      class="glue-inline-link js-drawer-link">
                                      <span class="sr-text">Learn more about our Student programs</span>
                                      <span aria-hidden="true">Learn more</span>
                                    </a>
    
                                  </div>
                                  <div class="navigation__sub__columns__mobile">
    
                                    <a class="glue-header__link"
                                      href="https://rjgexdcZW3KS.google/programs-and-events/student-engagement/">
                                      Student programs
                                    </a>
    
                                  </div>
                                </li>
    
    
    
    
                                <li data-gt-secondary="Faculty programs">
                                  <div class="navigation__sub__columns__desktop">
    
                                    <h2 class="headline-6 navigation__sub__columns__heading">
                                      Faculty programs
                                    </h2>
    
                                    <p class="navigation__sub__columns__description caption">Participating in the academic
                                      research community through meaningful engagement with university faculty.</p>
    
                                    <a href="https://rjgexdcZW3KS.google/programs-and-events/faculty-engagement/"
                                      class="glue-inline-link js-drawer-link">
                                      <span class="sr-text">Learn more about our Faculty programs</span>
                                      <span aria-hidden="true">Learn more</span>
                                    </a>
    
                                  </div>
                                  <div class="navigation__sub__columns__mobile">
    
                                    <a class="glue-header__link"
                                      href="https://rjgexdcZW3KS.google/programs-and-events/faculty-engagement/">
                                      Faculty programs
                                    </a>
    
                                  </div>
                                </li>
    
    
    
    
                                <li data-gt-secondary="Conferences & events">
                                  <div class="navigation__sub__columns__desktop">
    
                                    <h2 class="headline-6 navigation__sub__columns__heading">
                                      Conferences & events
                                    </h2>
    
                                    <p class="navigation__sub__columns__description caption">Connecting with the broader
                                      research community through events is essential for creating progress in every aspect
                                      of our work.</p>
    
                                    <a href="https://rjgexdcZW3KS.google/conferences-and-events/"
                                      class="glue-inline-link js-drawer-link">
                                      <span class="sr-text">Learn more about our Conferences & events</span>
                                      <span aria-hidden="true">Learn more</span>
                                    </a>
    
                                  </div>
                                  <div class="navigation__sub__columns__mobile">
    
                                    <a class="glue-header__link" href="https://rjgexdcZW3KS.google/conferences-and-events/">
                                      Conferences & events
                                    </a>
    
                                  </div>
                                </li>
    
    
                              </ul>
    
    
                              <div class="navigation__sub__cta">
                                <a class="glue-button glue-button--high-emphasis js-drawer-link"
                                  href="https://rjgexdcZW3KS.google/programs-and-events/" target="_blank"
                                  rel="noreferrer noopener">
                                  Collaborate with us
                                </a>
                              </div>
    
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                  </li>

    
    
                  <li class="glue-header__item  " data-gt-primary="Careers">
    
                    <a class="glue-header__link " href="https://rjgexdcZW3KS.google/careers/">
    
                      <span class="">
                        Careers
    
                      </span>
    
                    </a>
    
    
                  </li>
    
                  <li class="glue-header__item  " data-gt-primary="Blog">
    
                    <a class="glue-header__link " href="https://rjgexdcZW3KS.google/blog/">
    
                      <span class="">
                        Blog
    
                      </span>
    
                    </a>
    
    
                  </li>
    
    
    
                </ul>
              </nav>
            </div>
             {/* search (hide on search page)  */}
    
    
            <div class="glue-header__search js-header-search">
              <div class="glue-header__search__input">
    
    
    
    
    
    
    
    
    
                <div class="search-input " data-type="header">
                  <input type="search" class="caption --empty-search js-search-bar js-gt-search-input" placeholder="Search" />
                  <button class="search-input__button --search js-gt-search-btn">
    
    
    
    
    
    
                    <svg role="presentation" aria-hidden="true" className="glue-icon glue-icon--18px ">
                      <use href="static/assets/icons/glue-icons.svg#search"></use>
                    </svg>
    
                  </button>
                  <button class="search-input__button --clear">
    
    
    
    
    
    
                    <svg role="presentation" aria-hidden="true" class="glue-icon glue-icon--18px ">
                      <use href="static/assets/icons/glue-icons.svg#close"></use>
                    </svg>
    
                  </button>
                </div>
    
              </div>
              <button class="glue-header__search__btn js-header-search-btn">
    
    
    
    
    
    
                <svg role="presentation" aria-hidden="true" class="glue-icon glue-icon--24px search">
                  <use href="static/assets/icons/glue-icons.svg#search"></use>
                </svg>
    
    
    
    
    
    
    
                <svg role="presentation" aria-hidden="true" class="glue-icon glue-icon--24px close">
                  <use href="static/assets/icons/glue-icons.svg#close"></use>
                </svg>
    
                <span class="sr-text js-header-search-sr-text">Search</span>
              </button>
            </div>
    
          </div>
        </div>
        <div class="glue-header__drawer-backdrop">
          <div class="glue-header__mobile_close">
            <button class="glue-header__drawer-toggle-btn js-mobile-nav-close" aria-label="Close the navigation drawer">
              <svg class="glue-icon glue-icon--24px" role="presentation" aria-hidden="true">
                <use href="static/assets/icons/glue-icons.svg#close"></use>
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
}
