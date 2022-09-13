import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from '../Form/Form';
import UseFieldArray from '../Form/UseFieldArray';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/form' element={<Form />} />
        <Route path='/useFieldArray' element={<UseFieldArray />} />
      </Routes>
    </>
  );
}
