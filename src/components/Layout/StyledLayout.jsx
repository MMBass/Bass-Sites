import { styled } from '@mui/material/styles';
import Layout from './Layout';

const StyledLayout = styled(Layout)`
  height: 100vh;
  background: linear-gradient(165deg, ${props => props.mainColor} 70%, rgba(239,242,239,1) 30%);
`;

export default StyledLayout;