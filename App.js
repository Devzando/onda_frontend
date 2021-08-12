import React from 'react';

import Routes from './src/routes.js';
import { AuthProvider } from './src/context/AuthContext'
import { UserImgProvider } from './src/context/userimgContext.js';

export default function App() {
  return (
    <AuthProvider>
      <UserImgProvider>
        <Routes />
      </UserImgProvider>
    </AuthProvider>
  );
}