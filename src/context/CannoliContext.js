import React, {createContext, useState, useContext} from 'react';

export const cannoliContext = createContext({});

export function useCannoliContext() {
    return useContext(cannoliContext);
}