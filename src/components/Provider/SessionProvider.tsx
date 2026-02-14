// src/providers/SessionProvider.tsx
'use client';

import { useClientSession } from '@/hook/authentication/useClientSession';
import { createContext, useContext } from 'react';


type SessionContextType = ReturnType<typeof useClientSession>;

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const session = useClientSession();
  
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within SessionProvider');
  }
  return context;
};