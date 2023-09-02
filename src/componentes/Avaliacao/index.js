import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function Avaliacao() {

    return (
        <Box sx={{
            padding: 2}}>
            <Typography component="legend">Avalie seu curso</Typography>
            <Rating name="estrelas" value={null} />
        </Box>
    );
}