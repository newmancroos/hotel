import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "../../../../css/site.css";
function BranchEditFor(props) {
  return (
    <form onSubmit={props.submitForm} className="needs-validation" noValidate>
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
              required
              type="number"
              className={`${
                props.errors.id.length > 0 ? "errorControl" : ""
              } form-control content-control smal-text`}
              name="id"
              placeholder="Id"
              onChange={props.handleChange}
              value={props.id}
              disabled={props.mode === 1 ? true : false}
            />
            {props.errors.id.length > 0 && (
              <div className="errorMessage">{props.errors.id}</div>
            )}
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">Name :</div>
          <div className="col col-lg-4 ">
            <input
              required
              type="text"
              className={`${
                props.errors.name.length > 0 ? "errorControl" : ""
              } form-control content-control`}
              name="name"
              placeholder="Branch Name"
              onChange={props.handleChange}
              value={props.name}
            />
            {props.errors.name.length > 0 && (
              <div className="errorMessage">{props.errors.name}</div>
            )}
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">
            Address1 :
          </div>
          <div className="col col-lg-6">
            <input
              type="text"
              className={`${
                props.errors.address1.length > 0 ? "errorControl" : ""
              } form-control content-control`}
              name="address1"
              placeholder="Address 1"
              onChange={props.handleChange}
              value={props.address1}
            />
            {props.errors.address1.length > 0 && (
              <div className="errorMessage">{props.errors.address1}</div>
            )}
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
              className={`${
                props.errors.city.length > 0 ? "errorControl" : ""
              } form-control content-control`}
              name="city"
              placeholder="City"
              onChange={props.handleChange}
              value={props.city}
            />
            {props.errors.city.length > 0 && (
              <div className="errorMessage">{props.errors.city}</div>
            )}
          </div>
        </div>

        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">Country :</div>
          <div className="col col-lg-5 ">
            <select
              className={`${
                props.errors.countryId.length > 0 ? "errorControl" : ""
              } dropdown content-control`}
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
            {props.errors.countryId.length > 0 && (
              <div className="errorMessage">{props.errors.countryId}</div>
            )}
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">State :</div>
          <div className="col col-lg-5 ">
            <select
              className={`${
                props.errors.stateId.length > 0 ? "errorControl" : ""
              } dropdown content-control`}
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
            {props.errors.stateId.length > 0 && (
              <div className="errorMessage">{props.errors.stateId}</div>
            )}
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">
            Zip Code :
          </div>
          <div className="col col-lg-2">
            <input
              type="text"
              className={`${
                props.errors.zipCode.length > 0 ? "errorControl" : ""
              } form-control content-control`}
              name="zipCode"
              placeholder="Zip Code"
              onChange={props.handleChange}
              value={props.zipCode}
            />
            {props.errors.zipCode.length > 0 && (
              <div className="errorMessage">{props.errors.zipCode}</div>
            )}
          </div>
        </div>
        <div className="row row-space">
          <div className="col col-lg-2 text-right content-lable">
            <button
              id="btnUpdate"
              className="btn btn-primary"
              disabled={!props.isSaveEnable}
            >
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
