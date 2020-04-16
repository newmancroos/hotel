import React, { Component } from "react";
import ReactDOM from "react-dom";
function BranchEditFor(props) {
  return (
    <form onSubmit={props.submitForm}>
      <div className="container  col-lg-10">
        <div className="row">
          <div className="col col-lg-12 page-title text-center">
            Edit Branch
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">Id :</div>
          <div className="col col-lg-2 ">
            <input
              type="number"
              className="form-control content-control smal-text"
              name="id"
              placeholder="Id"
              onChange={props.handleChange}
              value={props.id}
              disabled={props.mode === 1 ? true : false}
            />
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">Name :</div>
          <div className="col col-lg-4 ">
            <input
              type="text"
              className="form-control content-control"
              name="name"
              placeholder="Branch Name"
              onChange={props.handleChange}
              value={props.name}
            />
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">
            Address1 :
          </div>
          <div className="col col-lg-6">
            <input
              type="text"
              className="form-control content-control"
              name="address1"
              placeholder="Address 1"
              onChange={props.handleChange}
              value={props.address1}
            />
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">
            Address2 :
          </div>
          <div className="col col-lg-6 ">
            <input
              type="text"
              className="form-control content-control"
              name="address2"
              placeholder="Address 2"
              onChange={props.handleChange}
              value={props.address2}
            />
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">City :</div>
          <div className="col col-lg-4 ">
            <input
              type="text"
              className="form-control content-control"
              name="city"
              placeholder="City"
              onChange={props.handleChange}
              value={props.city}
            />
          </div>
        </div>

        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">Country :</div>
          <div className="col col-lg-5 ">
            <select
              className="dropdown content-control"
              name="countryId"
              placeholder="Country"
              onChange={props.handleChange}
              value={props.countryId}
            >
              <option key="0" value="0">
                Select Country
              </option>
              {props.countries.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.description}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">State :</div>
          <div className="col col-lg-5 ">
            <select
              className="dropdown content-control"
              name="stateId"
              placeholder="State"
              onChange={props.handleChange}
              value={props.stateId}
            >
              <option key="0" value="0">
                Select State
              </option>
              {props.stateForCountry.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">
            Zip Code :
          </div>
          <div className="col col-lg-2">
            <input
              type="text"
              className="form-control content-control"
              name="zipCode"
              placeholder="Zip Code"
              onChange={props.handleChange}
              value={props.zipCode}
            />
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">
            <button id="btnUpdate" className="btn btn-primary">
              Update
            </button>
          </div>
          <div className="col col-lg-2 text-right content-lable">
            <button
              id="btnCancel"
              type="button"
              className="btn btn-primary"
              onClick={props.cancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default BranchEditFor;
