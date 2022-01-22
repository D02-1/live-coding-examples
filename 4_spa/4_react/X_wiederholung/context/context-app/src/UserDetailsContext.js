// Wir importieren createContext von react.
import { createContext } from 'react';

// Wir initialisieren unseren context, und stellen den initial/oder defaultwert auf "null".
const UserDetailsContext = createContext(null);

// Wir exportieren unseren neuen context.
export { UserDetailsContext }
