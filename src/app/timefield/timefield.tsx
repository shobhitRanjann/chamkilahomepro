"use client"

import React from "react"

interface TimeSelectorProps {
  label: string
  value: string
  name: string
  id: string
  onChange: (value: string) => void
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({ label, value, name, onChange }) => {
  const [time, setTime] = React.useState(() => {
    const [hours, minutes, period] = value.split(/[:\s]/)
    return {
      hours: hours === "12" ? "12" : String(Number.parseInt(hours, 10) % 12).padStart(2, "0"),
      minutes,
      period: period || (Number.parseInt(hours, 10) >= 12 ? "PM" : "AM"),
    }
  })

  React.useEffect(() => {
    let hours = Number.parseInt(time.hours, 10)
    if (time.period === "PM" && hours !== 12) hours += 12
    if (time.period === "AM" && hours === 12) hours = 0
    onChange(`${hours.toString().padStart(2, "0")}:${time.minutes} ${time.period}`)
  }, [time, onChange])

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex space-x-2">
        <select
          id={`${name}-hours`}
          value={time.hours}
          onChange={(e) => setTime((prev) => ({ ...prev, hours: e.target.value }))}
          className="block w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {[12, ...Array.from({ length: 11 }, (_, i) => i + 1)].map((hour) => (
            <option key={hour} value={hour.toString().padStart(2, "0")}>
              {hour.toString().padStart(2, "0")}
            </option>
          ))}
        </select>
        <span className="text-xl font-bold">:</span>
        <select
          id={`${name}-minutes`}
          value={time.minutes}
          onChange={(e) => setTime((prev) => ({ ...prev, minutes: e.target.value }))}
          className="block w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {[...Array(4)].map((_, i) => (
            <option key={i} value={(i * 15).toString().padStart(2, "0")}>
              {(i * 15).toString().padStart(2, "0")}
            </option>
          ))}
        </select>
        <select
          id={`${name}-period`}
          value={time.period}
          onChange={(e) => setTime((prev) => ({ ...prev, period: e.target.value }))}
          className="block w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  )
}

