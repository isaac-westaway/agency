import { useMediaQuery } from 'react-responsive';

export const useDesktop = () => useMediaQuery({ minWidth: 1100 });
export const useMobile = () => useMediaQuery({ minWidth: 0, maxWidth: 1099.9 });
