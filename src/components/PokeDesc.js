import axios from "axios";
import React, { useEffect, useState } from "react";

function PokeDesc({ url }) {
  const [desc, setDesc] = useState();

  useEffect(() => {
    const getDesc = async () => {
      const data = await axios.request({
        method: "get",
        url: url,
        crossDomain: true,
      });
      setDesc(data.data.flavor_text_entries[0].flavor_text);
    };
    getDesc();
  }, []);

  return (
    <div>
        <p className="lead">{desc}</p>
    </div>
  );
}

export default PokeDesc;
