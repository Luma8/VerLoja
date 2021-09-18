import React from 'react';
import Cesta from './src/Pages/Cesta';
import mock from './src/Pages/Cesta/Components/Mocks/Cesta'

export default function App() {
  return (
    <Cesta {...mock} />
  );
}

