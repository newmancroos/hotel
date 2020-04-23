import React, { Component } from "react";
import * as api from "../../Services/FetchService";
import BranchEditForm from "./BranchEditForm";
import Loading from "../../Common/Loading";
import Error from "../../Common/Error";
import axios from "axios";
import PropTypes from "prop-types";

const formValid = (formErros, ...rest) => {
  let valid = treu;
  Object.values(formErros).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Object.values(rest).forEach((val) => {
  //   val === nullv && (valid = false);
  // });

  return valid;
};
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null,
      address1: null,
      address2: null,
      city: null,
      stateId: null,
      countryId: null,
      zipCode: null,
      errors: {
        id: "",
        name: "",
        address1: "",
        address2: "",
        city: "",
        stateId: "",
        countryId: "",
        zipCode: "",
      },
      apiError: "",
      error: false,
      countries: [],
      states: [],
      stateForCountry: [],
      loading: true,
      mode: 0,
      isSaveEnable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  //Need to check how the error is handled here.
  componentDidMount() {
    if (this.props.match.params.id == 0) {
      this.getAllCountriesAndStates();
    } else {
      this.setState({ mode: 1 });
      this.getAllCountriesAndStates().then(
        fetch(
          "https://localhost:44325/branch/getasync/" +
            this.props.match.params.id
        )
          .then((res) => {
            if (!res.ok) {
              this.setState({
                error: true,
                apiError: "Internal Server error.",
              });
            }
            return res.json();
          })
          .then((data) => {
            var states = this.state.states.filter(
              (c) => c.countryId == data.data.countryId
            );
            this.setState({
              id: data.data.id,
              name: data.data.name,
              address1: data.data.address1,
              address2: data.data.address2,
              countryId: data.data.countryId,
              stateForCountry: states,
              stateId: data.data.stateId,
              city: data.data.city,
              zipCode: data.data.zipCode,
            });
          })
          .catch((apiError) => this.setState({ loading: false, apiError }))
      );
    }
  }
  getAllCountriesAndStates() {
    return Promise.all([this.getAllCountries(), this.getAllStates()]);
  }
  getAllCountries() {
    fetch("https://localhost:44325/country/getallcountries")
      .then((res) => {
        if (!res.ok) {
          this.setState({ error: true, apiError: "Internal Server error." });
          alert("Error");
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ loading: false, countries: data.data });
        //console.log(data.data);
      })
      .catch((apiError) => {
        this.setState({ loading: false, apiError });
        alert(apiError);
      });
  }
  getAllStates() {
    fetch("https://localhost:44325/state/getallstates")
      .then((res) => {
        if (!res.ok) {
          this.setState({ error: true, apiError: "Internal Server error." });
          alert("Error");
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ loading: false, states: data.data });
        //console.log(data.data);
      })
      .catch((apiError) => {
        this.setState({ loading: false, apiError });
        alert(apiError);
      });
  }
  handleChange(e) {
    const { name, value, type, checked } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "id":
        errors.id =
          this.state.mode === 0
            ? value.length === 0 || value === "0"
              ? "Id should not be empty or 0!"
              : ""
            : "";
        break;
      case "name":
        errors.name =
          value.length < 5 ? "Name must be 5 or more characters long!" : "";
        break;
      case "address1":
        errors.address1 = value.length == 0 ? "Address1 is require" : "";
        break;
      case "city":
        errors.city = value.length == 0 ? "City is require" : "";
        break;
      case "countryId":
        errors.countryId = value == 0 ? "Country is require" : "";
        if (value != 0) {
          var state4Country = this.state.states.filter(
            (c) => c.countryId == value
          );
          this.setState({ stateForCountry: state4Country });
        }
        break;
      case "stateId":
        errors.stateId = value == 0 ? "State is Requied" : "";
        break;
      case "zipCode":
        errors.zipCode = value.length == 0 ? "Zipcode is require" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
    type == "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  submitForm(e) {
    e.preventDefault();
    let data = {
      id: parseInt(this.state.id),
      name: this.state.name,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      stateId: parseInt(this.state.stateId),
      countryId: parseInt(this.state.countryId),
      zipcode: this.state.zipCode,
    };

    if (this.state.mode == 1) {
      fetch("https://localhost:44325/branch/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(() => {
          alert("Branch successfully updated");
          this.props.history.push("/administrator/branch");
        })
        .catch(function (error) {
          alert(error);
        });
    } else {
      fetch("https://localhost:44325/branch/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((msg) => {
          alert("Branch successfully updated");
          this.props.history.push("/administrator/branch");
        })
        .catch(function (error) {
          alert(error);
        });
    }
    // axios
    //   .post("https://localhost:44325/branch/edit", data)
    //   .then(response => response.json())
    //   .then(() => {
    //     alert("Branch successfully updated");
    //   });
  }
  // fillStateData = data => {
  //   //console.log(data);
  //   this.setState({ id: data.data.id, name: data.data.name });
  // };
  cancelClick = (e) => {
    e.preventDefault();
    this.props.history.push("/administrator/branch");
  };

  render() {
    return (
      <div>
        {this.state.loading && <Loading />}
        {this.state.error && <Error error={apiError} />}
        <BranchEditForm
          handleChange={this.handleChange}
          {...this.state}
          submitForm={this.submitForm}
          cancelClick={this.cancelClick}
        />
      </div>
    );
  }
}

Edit.propTypes = {
  id: PropTypes.number,
  stateId: PropTypes.number,
  countryId: PropTypes.number,
};
export default Edit;
