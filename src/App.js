import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import EntradaTexto from './componentes/EntradaTexto';
import Botao from './componentes/Botao';
import Avaliacao from './componentes/Avaliacao';
import CaixaSelecao from './componentes/CaixaSelecao';
import { Box, Container, Typography } from '@mui/material';

function App() {
  return (
    <Container 
    sx={{ 
        bgcolor: '#337E81', 
        height: '100vh', 
        width: '100vw' }} >

    <Grid
        container
        alignItems="center"
    >
        <Grid xs={6} >
            <img src="/imagens/imagem1.jpg" alt="Minha Imagem" />
        </Grid>
       
        <Grid xs={6} >
            <Paper
                sx={{
                    padding: 2,
                    border: '1px solid #ccc',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Typography variant="h5" component="div">Avalie seu curso</Typography>
            
                <EntradaTexto />
            
                <Box sx={{padding: 2}}>                            
                    <Typography component="legend">Curso(s):</Typography>
                    <CaixaSelecao valor="ADS" />
                    <CaixaSelecao valor="Administração" />
                    <CaixaSelecao valor="Física" />
                    <CaixaSelecao valor="Matemática" />
                </Box>

                <Avaliacao/>
                
                <Botao />
            
            </Paper>
        </Grid>
    </Grid>
</Container>
  );
}

export default App;
