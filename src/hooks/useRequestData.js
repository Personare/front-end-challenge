import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (url) => {
  const [data, setData] = useState([]);
  // console.log(url);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log("OK", res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return data;
};

export default useRequestData;
