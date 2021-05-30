import React from 'react';

import Routes from './src/routes.js';
import { AuthProvider } from './src/context/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}