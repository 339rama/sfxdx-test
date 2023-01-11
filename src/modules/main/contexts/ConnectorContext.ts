import { createContext } from "react";

export const ConnectorContext = createContext<{
    account: string | null | undefined, 
    onConnect: ()=> void,
    onDisconnect: ()=> void,
} | null>(null);