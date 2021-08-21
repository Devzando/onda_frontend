import React from 'react';

import Routes from './src/routes.js';
import { AuthProvider } from './src/context/AuthContext'
import { UserImgProvider } from './src/context/userimgContext.js';
import { DistributionProvider } from './src/context/distributionContext'

export default function App() {
  return (
    <AuthProvider>
      <UserImgProvider>
        <DistributionProvider>
          <Routes />
        </DistributionProvider>
      </UserImgProvider>
    </AuthProvider>
  );
}