import { useMemo } from 'react'
import { useRouter } from 'next/router'

export default function useIsHomePage(): boolean {
  const router = useRouter()

  return useMemo(() => router.pathname === '/', [router.pathname])
};