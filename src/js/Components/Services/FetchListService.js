import React, { Component } from "react";

class FetchListService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      data: []
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(data => this.setState({ loading: false, data: data.data }))
      .catch(error => this.setState({ loading: false, error }));
  }

  render() {
    return this.props.children(this.state);
  }
}

export default FetchListService;
