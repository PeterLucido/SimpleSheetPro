// Header.tsx
import React from 'react'

const Header = () => {
  return (
    <header className="bg-white text-blue-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Simple Sheet Pro</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/home">Home</a></li>
            <li><a href="/divesheets">Dive Sheets</a></li>
            <li><a href="/newdivesheet">New Dive Sheet</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/logout">Log Out</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
