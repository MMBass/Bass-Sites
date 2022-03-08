import React from 'react';

import UtilsContextProvider from './UtilsContext';
import DrawerContextProvider from './DrawerContext';
import BannersContextProvider from './BannersContext';
import LoadersContextProvider from './LoadersContext';

const components = [DrawerContextProvider, BannersContextProvider, LoadersContextProvider, UtilsContextProvider];

export default function ContextComposer(props) {
    return (
      <>
        {
          components.reduceRight((acc, Comp) => {
            return <Comp>{acc}</Comp>;
          }, props.children)
        }  
      </>
    );
};