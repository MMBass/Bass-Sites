import { useEffect, useContext } from "react";

import { useTranslation } from 'react-i18next';

import { UtilsContext } from '@context/UtilsContext';
import { Typography } from "@mui/material";

function HomePage({ className }) {
  //['homePage']
  const { t } = useTranslation();
  const { handleSetCurrPage } = useContext(UtilsContext);

  useEffect(() => {
    handleSetCurrPage('home');
  }, []);


  return (
    <div className={className}>
      <Typography variant="h2" className="page-h2">
        {/* We will help you to build
        <br></br> */}
        {t('mainH2')}
        {/* a perfect site for your buisness */}
      </Typography>
    </div>
  );
};

export default HomePage;