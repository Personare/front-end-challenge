import React from "react";
import { CircleLoader } from "react-spinners";

import "./loading.scss";

const Loading = () => (
    <div className="loading">
        <CircleLoader sizeUnit={"px"} size={150} color={"#30394d"} />
    </div>
);

export default Loading;
