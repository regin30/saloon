import React, { createContext, useState, ReactNode } from 'react'

interface MyContextType<T> {
  value: T
  setValue: (value: T) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyContext = createContext<MyContextType<any> | undefined>(undefined)

export const MyProvider = <T,>({ children, initialValue }: { children: ReactNode, initialValue: T }) => {
  const [value, setValue] = useState<T>(initialValue)

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = <T,>() => {
  const context = React.useContext(MyContext) as MyContextType<T>
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider')
  }
  return context
}
