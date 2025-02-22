"use client"

import type React from "react"
import { createContext, useState, useContext } from "react"

type AlertContextType = {
  isAlertVisible: boolean
  showAlert: () => void
  hideAlert: () => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAlertVisible, setIsAlertVisible] = useState(true)

  const showAlert = () => setIsAlertVisible(true)
  const hideAlert = () => setIsAlertVisible(false)

  return <AlertContext.Provider value={{ isAlertVisible, showAlert, hideAlert }}>{children}</AlertContext.Provider>
}

export const useAlert = () => {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error("useAlert must be used within an AlertProvider")
  }
  return context
}

