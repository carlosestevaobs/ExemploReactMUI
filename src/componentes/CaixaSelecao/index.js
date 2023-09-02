import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function CaixaSelecao({ valor }) {
  return (
    <div>
      <Checkbox name={valor} /> {valor}
    </div>
  );
}