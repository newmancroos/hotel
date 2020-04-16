import React, { Component } from "react";
import { Link } from "react-router-dom";
//import * as api from '../Services/FetchService';
import FetchListService from "../../Services/FetchListService";
import Loading from "../../Common/Loading";
import Error from "../../Common/Error";
class Branch extends Component {
  constructor(props) {
    super(props);
  }
  addBranchClick(e) {
    this.props.history.push("/administrator/branch/edit/0");
  }
  render() {
    let colors = ["#00ffff", "#00ffbf"];
    return (
      <div className="container  col-lg-10">
        <div className="row">
          <div className="col col-lg-12 page-title text-center">Branches</div>
        </div>
        <FetchListService url="https://localhost:44325/branch/getallasync">
          {({ loading, error, data }) => (
            <>
              {loading && <Loading />}
              {error && <Error error={error} />}
              <div className="row table-header">
                <div className="col col-lg-3">Hotel Name</div>
                <div className="col col-lg-3">Address1</div>
                <div className="col col-lg-2">City</div>
                <div className="col col-lg-2">State</div>
                <div className="col col-lg-1">Country</div>
                <div className="col col-lg-1"></div>
              </div>
              {data.map((item, index) => (
                <div
                  key={"row" + index}
                  className="row"
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  <div key={"name" + index} className="col col-lg-3">
                    {item.name}
                  </div>
                  <div key={"address1" + index} className="col col-lg-3">
                    {item.address1}
                  </div>
                  <div key={"city" + index} className="col col-lg-2">
                    {item.city}
                  </div>
                  <div key={"stateName" + index} className="col col-lg-2">
                    {item.stateName}
                  </div>
                  <div key={"countryName" + index} className="col col-lg-1">
                    {item.countryAbbv}
                  </div>
                  <div key={"edit" + index} className="col col-lg-1">
                    <Link
                      key={item.id}
                      to={"/administrator/branch/edit/" + item.id}
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
        </FetchListService>
        <div className="row">
          <div className="col col-lg-12 page-title text-left">
            <Link
              className="btn btn-primary mr-0"
              key={"addBranch"}
              to={"/administrator/branch/edit/0"}
            >
              Add Branch
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Branch;
