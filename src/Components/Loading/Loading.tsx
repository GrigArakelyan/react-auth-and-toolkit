import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import "./Loading.scss"
import { FC } from 'react';

const Loading:FC = () => {
  return (
    <Box className="loading_div">
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
    </Box>
  );
}

export default Loading