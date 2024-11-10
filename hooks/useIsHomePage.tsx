import { useRouter } from 'next/router';

export default function useIsHomePage(): boolean {
  const router = useRouter();
  return router.pathname === '/';
};