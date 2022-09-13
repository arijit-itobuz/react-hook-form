import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UseForm from '../Form/UseForm';
import UseFieldArray from '../Form/UseFieldArray';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/useForm' element={<UseForm />} />
        <Route path='/useFieldArray' element={<UseFieldArray />} />
      </Routes>
    </>
  );
}
