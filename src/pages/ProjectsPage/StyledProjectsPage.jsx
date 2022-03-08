import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import ProjectsPage from './ProjectsPage';

import { UtilsContext } from '@context/UtilsContext';

const StyledProjectsPage = styled(ProjectsPage)`
    height: inherit;
`;

export default StyledProjectsPage;