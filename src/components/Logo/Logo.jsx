import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';
import {Box, Typography} from '@mui/material'
const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Box sx={{display:"flex"}} >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-a" width="36" height="36" viewBox="0 0 24 24" stroke-width="3" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" />
            <line x1="7" y1="13" x2="17" y2="13" />
        </svg>
        
        <Link to={routes.HOME}><Typography variant='h5'>boneda</Typography></Link>
      </Box>
    </div>
  );
};

export default Logo;
