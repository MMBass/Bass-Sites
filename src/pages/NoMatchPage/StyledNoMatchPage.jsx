import { styled } from '@mui/material/styles';
import NoMatchPage from './NoMatchPage';

const StyledNoMatchPage = styled(NoMatchPage)`
height: inherit;
  background: linear-gradient(165deg, ${props => props.theme.palette.primary.main} 70%, rgba(239,242,239,1) 30%);
`; 

export default StyledNoMatchPage;