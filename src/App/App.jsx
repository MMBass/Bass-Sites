import { useEffect, useContext } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import '@i18n/i18n';

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

import { UtilsContext } from '@context/UtilsContext';
import { DrawerContext } from '@context/DrawerContext';
import { LoadersContext } from '@context/LoadersContext';
import { BannersContext } from '@context/BannersContext';
import HeadTags from '@components/HeadTags/HeadTags';

import { default as Header } from '@components/Header/StyledHeader';
import { default as Layout } from '@components/Layout/StyledLayout';
import { default as Footer } from '@components/Footer/StyledFooter';
import { default as Drawer } from '@components/Drawer/StyledDrawer';
import { default as Dialog } from '@components/Dialog/StyledDialog';
import { default as Modal } from '@components/Modal/StyledModal';
import { LinearProgress, CircularProgress, Snackbar, Alert, AlertTitle } from '@mui/material';

import { default as HomePage } from '@pages/HomePage/StyledHomePage';
import { default as WordpressPluginsPage } from '@pages/WordpressPluginsPage/StyledWordpressPluginsPage';
import { default as ProjectsPage } from '@pages/ProjectsPage/StyledProjectsPage';
import { default as NoMatchPage } from '@pages/NoMatchPage/StyledNoMatchPage';

function App({ className }) {
  const utilsContext = useContext(UtilsContext);
  const drawerContext = useContext(DrawerContext);
  const loadersContext = useContext(LoadersContext);
  const bannersContext = useContext(BannersContext);

  const { t, i18n } = useTranslation();

  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  document.body.dir = i18n.dir();

  function init() {
    // call basic data from api, set modes etc.
  }

  useEffect(() => {
    init();
  }, []);

  const handleCloseSnackbar = (name) => {
    // bannersContext.toggleBanner(name);
    changeLanguage((i18n.language === "he") ? "en" : "he");
    // bannersContext.toggleBanner(name);
  }

  const changeLanguage = (lng) => {
    console.log(lng)
    i18n.changeLanguage(lng).then(() => {
      document.body.dir = i18n.dir();
    });
    // theme.direction = i18n.dir();
  } // todo move to select conponent, optional through service for multiple use.

  return (
    <div className={className}>
      <CacheProvider value={cacheRtl}>
        <Router>
          <HeadTags></HeadTags>
          <Header className="header"></Header>
          {(bannersContext.main.open) &&
            <Alert severity="warning" className={"alert-main"}>
              <AlertTitle>{bannersContext.main.title[i18n.language]}</AlertTitle>
              {/* message here */}
            </Alert>
          }
          <Layout mainColor={utilsContext.mainColor}>
            <Routes>
              <Route path={"/"} element={<HomePage className={'page'} />} />
              <Route path={"/wordpress-plugins"} element={<WordpressPluginsPage className={'page'} />} />
              <Route path={"/projects"} element={<ProjectsPage className={'page'} />} />
              <Route path="*" element={<NoMatchPage className={'page'} />} />
            </Routes>
          </Layout>

          {/*dynamic global elements*/}
          {(drawerContext.open && drawerContext.child) &&
            <Drawer className="drawer"></Drawer>
          }
          {(loadersContext.main.open) &&
            <LinearProgress color={loadersContext.main.color || "primary"} />
          }
          {(loadersContext.circular.open) &&
            <CircularProgress color={loadersContext.main.color || "primary"} />
            // use in specific component, or remove
          }
          {(bannersContext.snackbar.open) &&
            <Snackbar open={bannersContext.snackbar.open} autoHideDuration={6000} onClose={() => { }}>
              <Alert onClose={() => { handleCloseSnackbar('snackbar') }} severity={bannersContext.snackbar.severity} sx={{ width: '100%' }}>
                {bannersContext.snackbar.message[i18n.language]}
              </Alert>
            </Snackbar>
          }
          {/* <Dialog></Dialog> */}
          {/* <Modal> */}
          {/* Modal must have a children */}
          {/* </Modal> */}
          {/*end dynamic global elements*/}

          <Footer></Footer>
        </Router>
      </CacheProvider>
    </div>
  );
}

export default App;