// Wir importieren createContext von react.
import { createContext } from 'react';

// Wir initialisieren unseren context, und stellen den initial/oder defaultwert auf "null".
const CurrencyContext = createContext({ type: '€', conversion: 1 });

// Wir exportieren unseren neuen context.
export { CurrencyContext }
