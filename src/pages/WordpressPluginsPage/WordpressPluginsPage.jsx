import { useEffect, useContext } from "react";

import { UtilsContext } from '@context/UtilsContext';

import { Typography } from "@mui/material";

function WordpressPlugins({ className }) {
  const { handleSetCurrPage } = useContext(UtilsContext);

  useEffect(() => {
    handleSetCurrPage('wordpress-plugins');
  }, []);


  return (
    <div id="" className={className}>
      <Typography variant="h2" className="page-h2">
        You can use plugins in every
        <br></br>
        wordpress installation
      </Typography>
    </div>
  );
}

export default WordpressPlugins;
