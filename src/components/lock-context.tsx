'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

interface LockContextType {
  isLocked: boolean
  lock: () => void
  unlock: () => void
}

const LockContext = createContext<LockContextType>({
  isLocked: true,
  lock: () => {},
  unlock: () => {},
})

export function useLock() {
  return useContext(LockContext)
}

const STORAGE_KEY = 'bd_proposal_v1_unlocked'

export function LockProvider({ children }: { children: React.ReactNode }) {
  const [isLocked, setIsLocked] = useState(true)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      setIsLocked(saved !== 'true')
    } catch {
      setIsLocked(true)
    }
    setHydrated(true)
  }, [])

  const lock = useCallback(() => {
    setIsLocked(true)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {}
    window.scrollTo({ top: 0 })
  }, [])

  const unlock = useCallback(() => {
    setIsLocked(false)
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {}
  }, [])

  if (!hydrated) return null

  return (
    <LockContext.Provider value={{ isLocked, lock, unlock }}>
      {children}
    </LockContext.Provider>
  )
}
