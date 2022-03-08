import { styled } from '@mui/material/styles';
import Header from './Header';

const StyledHeader = styled(Header)`
  background-color: ${props => props.theme.palette.secondary.light};
  color: ${props => props.theme.palette.secondary.main};

  button{
    color: ${props => props.theme.palette.secondary.main};
  }

  .MuiBox-root{
    direction: ltr;
    justify-content: flex-end;
  }

  .MuiButtonBase-root{
    padding-inline-start: 0;
  }
`;

export default StyledHeader;