import { styled } from '@mui/material/styles';
import Footer from './Footer';

const StyledFooter = styled(Footer)`
  color: ${props => props.theme.palette.secondary.dark};
  background-color: ${props => props.theme.palette.secondary.light};
  padding: 25px 30px 30px 25px;
  
  li span{
    color: ${props => props.theme.palette.secondary.dark};
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: #303030;
    margin: unset;
  }

`;

export default StyledFooter;