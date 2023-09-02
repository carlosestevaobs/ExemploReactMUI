import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function EntradaTexto() {
    return (
        <Box sx={{
            padding: 2
        }}>
            <TextField
                label="Nome completo"
            />
        </Box>
    );
}