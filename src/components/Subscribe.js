import React from "react";
import { Link } from "react-router-dom";

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
          <div>
            <h2>Subscribe</h2>
            <div className="form-group mc-field-group">
              <label for="mce-EMAIL">Email Address</label>
              <input
                type="email"
                name="EMAIL"
                className="form-control email"
                placeholder="Enter Email"
                id="mce-EMAIL"
                required
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group mc-field-group">
              <label for="mce-FNAME">First Name</label>
              <input
                type="text"
                name="FNAME"
                className="form-control"
                placeholder="Enter first name"
                id="mce-FNAME"
                required
              />
            </div>
            <div className="form-group mc-field-group">
              <label for="mce-LNAME">Last Name</label>
              <input
                type="text"
                name="LNAME"
                className="form-control"
                id="mce-LNAME"
                placeholder="Enter last name"
                required
              />
            </div>
            <div className="form-group mc-address-group">
              <div className="mc-field-group">
                <label for="mce-ADDRESS-addr1">Address</label>
                <input
                  type="text"
                  maxlength="70"
                  name="ADDRESS[addr1]"
                  id="mce-ADDRESS-addr1"
                  className="form-control"
                  placeholder="Enter address"
                  required
                />
              </div>
              <div className="mc-field-group size1of2">
                <label for="mce-ADDRESS-city">City</label>
                <input
                  type="text"
                  maxlength="40"
                  name="ADDRESS[city]"
                  id="mce-ADDRESS-city"
                  className="form-control"
                  placeholder="Enter city"
                  required
                />
              </div>
              <div className="mc-field-group size1of2">
                <label for="mce-ADDRESS-state">State/Province/Region</label>
                <input
                  type="text"
                  maxlength="20"
                  name="ADDRESS[state]"
                  id="mce-ADDRESS-state"
                  class="form-control"
                  placeholder="Enter region"
                  required
                />
              </div>
              <div className="mc-field-group size1of2">
                <label for="mce-ADDRESS-zip">Postal / Zip Code</label>
                <input
                  type="text"
                  maxlength="10"
                  name="ADDRESS[zip]"
                  id="mce-ADDRESS-zip"
                  className="form-control"
                  placeholder="Enter zip code"
                  required
                />
              </div>
              <div className="mc-field-group size1of2">
                <label for="mce-ADDRESS-country">Country</label>
                <select
                  name="ADDRESS[country]"
                  id="mce-ADDRESS-country"
                  class="form-control"
                  required
                >
                  <option value="164" selected>
                    USA
                  </option>
                  <option value="30">Canada</option>
                </select>
              </div>
            </div>
            <div className="mc-field-group size1of2">
              <label for="mce-PHONE">Phone Number</label>
              <input
                type="text"
                name="PHONE"
                id="mce-PHONE"
                className="form-control"
                required
                placeholder="Enter phone number"
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
                className="button btn btn-primary w-100 mt-3"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
