import React, { FC } from "react"
import Error from "../components/layouts/Error"

const ServerError: FC = () => {
  return <Error errorCode={404} />
};

export default ServerError;
