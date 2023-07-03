

import { useMediaQuery } from 'react-responsive';

export const useDesktop = () => useMediaQuery({ minWidth: 1300 });
export const useTablet = () => useMediaQuery({ minWidth: 850, maxWidth: 1299.9 });
export const useMobile = () => useMediaQuery({ minWidth: 0, maxWidth: 849.9 });