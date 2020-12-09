import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Alert, Col } from "react-bootstrap";
import jQuery, { $ } from "jquery";

const Subscribe = () => {
  return (
    <div className="container">
      <div id="mc_embed_signup" className="d-flex justify-content-center mt-5">
        <form
          action="https://fone-saver.us7.list-manage.com/subscribe/post?u=65bc58081e87a900fe2f8301f&amp;id=5ca182c0f8"
          method="post"
          rel="noopener"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label for="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
            </div>
            <div className="mc-field-group">
              <label for="mce-FNAME">
                First Name <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                name="FNAME"
                className="required"
                id="mce-FNAME"
              />
            </div>
            <div className="mc-field-group">
              <label for="mce-LNAME">
                Last Name <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                name="LNAME"
                className="required"
                id="mce-LNAME"
              />
            </div>
            <div className="mc-address-group">
              <div className="mc-field-group">
                <label for="mce-ADDRESS-addr1">
                  Address <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  maxlength="70"
                  name="ADDRESS[addr1]"
                  id="mce-ADDRESS-addr1"
                  className="required"
                />
              </div>
              <div className="mc-field-group">
                <label for="mce-ADDRESS-addr2">Address Line 2</label>
                <input
                  type="text"
                  maxlength="70"
                  name="ADDRESS[addr2]"
                  id="mce-ADDRESS-addr2"
                />
              </div>
              <div className="mc-field-group size1of2">
                <label for="mce-ADDRESS-city">City</label>
                <input
                  type="text"
                  maxlength="40"
                  name="ADDRESS[city]"
                  id="mce-ADDRESS-city"
                  className="required"
                />
              </div>
              <div className="mc-field-group size1of2">
                <label for="mce-ADDRESS-state">State/Province/Region</label>
                <input
                  type="text"
                  maxlength="20"
                  name="ADDRESS[state]"
                  id="mce-ADDRESS-state"
                  className="required"
                />
              </div>
              <div className="mc-field-group size1of2">
                <label for="mce-ADDRESS-zip">Postal / Zip Code</label>
                <input
                  type="text"
                  maxlength="10"
                  name="ADDRESS[zip]"
                  id="mce-ADDRESS-zip"
                  className="required"
                />
              </div>
              <div className="mc-field-group size1of2">
                <label for="mce-ADDRESS-country">Country</label>
                <select
                  name="ADDRESS[country]"
                  id="mce-ADDRESS-country"
                  className="required"
                >
                  <option value="164" selected>
                    USA
                  </option>
                  <option value="30">Canada</option>
                </select>
              </div>
            </div>
            <div className="mc-field-group size1of2">
              <label for="mce-PHONE">
                Phone Number <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                name="PHONE"
                className="required"
                id="mce-PHONE"
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
