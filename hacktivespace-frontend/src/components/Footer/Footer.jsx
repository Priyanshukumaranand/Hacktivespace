import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="glue-footer">
      <div className="glue-page">
        <section className="glue-social">
          <div className="glue-social__group glue-social--monochrome">
            <p className="glue-social__title glue-social__title--inline">Follow us</p>
            <nav className="js-gt-follow-us-wrapper" aria-label="Social media links">
              <ul className="glue-social__list" role="list">
                <li className="glue-social__item">
                  <a
                    className="glue-social__link"
                    href="https://twitter.com/GoogleAI"
                    title="Follow us on x"
                    target="_blank"
                    rel="noopener"
                    data-gt-method="x"
                  >
                    <svg role="presentation" aria-hidden="true" className="glue-icon glue-icon--social glue-icon--24px">
                      <use href="static/assets/icons/twitter-x.svg#twitter-x"></use>
                    </svg>
                  </a>
                </li>

                <li className="glue-social__item">
                  <a
                    className="glue-social__link"
                    href="https://www.linkedin.com/showcase/googleresearch/"
                    title="Follow us on linkedin"
                    target="_blank"
                    rel="noopener"
                    data-gt-method="linkedin"
                  >
                    <svg role="presentation" aria-hidden="true" className="glue-icon glue-icon--social glue-icon--24px">
                      <use href="static/assets/icons/glue-icons.svg#post-linkedin"></use>
                    </svg>
                  </a>
                </li>

                <li className="glue-social__item">
                  <a
                    className="glue-social__link"
                    href="https://www.youtube.com/c/GoogleResearch"
                    title="Follow us on youtube"
                    target="_blank"
                    rel="noopener"
                    data-gt-method="youtube"
                  >
                    <svg role="presentation" aria-hidden="true" className="glue-icon glue-icon--social glue-icon--24px">
                      <use href="static/assets/icons/glue-icons.svg#video-youtube"></use>
                    </svg>
                  </a>
                </li>

                <li className="glue-social__item">
                  <a
                    className="glue-social__link"
                    href="https://github.com/google-research"
                    title="Follow us on github"
                    target="_blank"
                    rel="noopener"
                    data-gt-method="github"
                  >
                    <svg role="presentation" aria-hidden="true" className="glue-icon glue-icon--social glue-icon--24px">
                      <use href="static/assets/icons/github.svg#github"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
      <div className="glue-fullbleed"></div>

      <section className="glue-page">
        <nav className="glue-footer__global" aria-label="Footer resource links">
          <div className="glue-footer__logo">
            <a href="https://www.google.com" title="Google" className="glue-footer__link">
              <svg role="presentation" aria-hidden="true" className="glue-icon glue-footer__logo-img">
                <use href="static/assets/icons/glue-icons.svg#google-solid-logo"></use>
              </svg>
            </a>
          </div>
          <ul className="glue-footer__global-links glue-no-bullet js-gt-global-nav-wrapper" role="list">
            <li className="glue-footer__global-links-list-item" data-gt-primary="About Google">
              <a className="glue-footer__link" href="https://about.google/" target="_blank" rel="noopener">
                About Google
              </a>
            </li>

            <li className="glue-footer__global-links-list-item" data-gt-primary="Google Products">
              <a className="glue-footer__link" href="https://about.google/intl/en/products/" target="_blank" rel="noopener">
                Google Products
              </a>
            </li>

            <li className="glue-footer__global-links-list-item" data-gt-primary="Privacy">
              <a className="glue-footer__link" href="https://policies.google.com/privacy" target="_blank" rel="noopener">
                Privacy
              </a>
            </li>

            <li className="glue-footer__global-links-list-item" data-gt-primary="Terms">
              <a className="glue-footer__link" href="https://policies.google.com/terms" target="_blank" rel="noopener">
                Terms
              </a>
            </li>
          </ul>
          <ul className="glue-footer__global-links glue-footer__global-links--extra glue-no-bullet" role="list">
            <li className="glue-footer__global-links-list-item glue-footer__global-links-list-item--extra">
              <a className="glue-footer__link" href="https://support.google.com/?hl=en">
                <svg role="presentation" aria-hidden="true" className="glue-icon glue-icon--24px glue-icon--footer-help">
                  <use href="static/assets/icons/glue-icons.svg#help"></use>
                </svg>
                Help
              </a>
            </li>
            <li className="glue-footer__global-links-list-item glue-footer__global-links-list-item--extra">
              <button className="glue-footer__link google-feedback js-feedback-button" data-product-id="5137383">
                Submit feedback
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
