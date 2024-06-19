import React, { useEffect, useState } from "react";
import instance from "../Index";

const SignUpAPI = (email) => {
  return instance.get("/user/check", {
    params: {
      email,
    },
  });
};

export default SignUpAPI;
