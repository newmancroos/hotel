import React, { Component } from "react";
export function getApiService(url) {
  var result = {
    status: "",
    data: null
  };
  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(
      (data = () => {
        result.status = "success";
        result.data = data;
        return result;
      })
    )
    .catch(
      (error = () => {
        result.status = "error";
        result.data = data;
        return result;
      })
    );
}
