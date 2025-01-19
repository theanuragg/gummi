import { createContext, useContext, useState } from 'react';

export const CaptainContext = createContext();

export const CaptainProvider = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const value = {
        captain,
        setCaptain,
        loading,
        setLoading,
        error,
        setError,
        updateCaptain
    };

    return (
        <CaptainContext.Provider value={value}>
            {children}
        </CaptainContext.Provider>
    );
};

export const useCaptain = () => {
    const context = useContext(CaptainContext);
    if (!context) {
        throw new Error('useCaptain must be used within a CaptainProvider');
    }
    return context;
};


