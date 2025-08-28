import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EmailModalContextType {
      isOpen: boolean;
      open: () => void;
      close: () => void;
}

const EmailModalContext = createContext<EmailModalContextType | undefined>(undefined);

export function EmailModalProvider({ children }: { children: ReactNode }) {
      const [isOpen, setIsOpen] = useState(false);
      const open = () => setIsOpen(true);
      const close = () => setIsOpen(false);

      return (
            <EmailModalContext.Provider value={{ isOpen, open, close }}>
                  {children}
            </EmailModalContext.Provider>
      );
}

export function useEmailModal() {
      const context = useContext(EmailModalContext);
      if (!context) throw new Error('useEmailModal must be used within EmailModalProvider');
      return context;
}
