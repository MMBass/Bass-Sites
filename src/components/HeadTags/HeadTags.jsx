import { useContext } from 'react';
import MetaTags from 'react-meta-tags';

import { UtilsContext } from '@context/UtilsContext';

function HeadTags() {
  const utilsContext = useContext(UtilsContext);

  return (
    <div className='wrapper'>
      <MetaTags>
        <meta name="theme-color" content={utilsContext.mainColor} />
      </MetaTags>
    </div>
  );
}

export default HeadTags;
