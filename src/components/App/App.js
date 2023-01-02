import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from 'components/Navigation';
import { AppStyled } from './App.styled';
import Loader from '../Loader';
import { Toaster } from 'react-hot-toast';
import HomePage from 'page/HomePage';
import MortgageCalculatorPage from 'page/MortgageCalculatorPage';
import RegisterPage from 'page/RegisterPage';
import LoginPage from 'page/LoginPage';

export default function App() {
  return (
    <AppStyled>
      <Toaster position="top-center" reverseOrder={false} />
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/calculator" element={<MortgageCalculatorPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </AppStyled>
  );
}
