import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UseForm from '../Form/Form';
import UseFieldArray from '../Form/UseFieldArray';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<><h1>Home</h1></>} />
        <Route path='/useForm' element={<UseForm />} />
        <Route path='/useFieldArray' element={<UseFieldArray />} />
      </Routes>
    </>
  );
}
