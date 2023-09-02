import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function Botao() {
  return <Box sx={{
    padding: 2
  }}>
    <Button variant="contained">Enviar avaliação</Button>
  </Box>;
}