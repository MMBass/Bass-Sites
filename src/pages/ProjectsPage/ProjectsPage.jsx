import { useEffect, useContext } from "react";

import { UtilsContext } from '@context/UtilsContext';

import { Typography } from "@mui/material";

function ProjectsPage({ className }) {
  const { handleSetCurrPage } = useContext(UtilsContext);

  useEffect(() => {
    handleSetCurrPage('projects');
  }, []);

  return (
    <div id="" className={className}>
      <Typography variant="h2" className="page-h2">
        Our Projects
      </Typography>
    </div>
  );
}

export default ProjectsPage;
