import React, { useEffect, useState } from "react";
import instance from "../Index";

const getSessionAPI = () => {
  return instance.get("/user/session");
};

export default getSessionAPI;
