import React from 'react'

function TopNavbar() {
  return (
    <div className="bg-[#0F1035] shadow p-4 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded py-2 px-4"
      />
      <div className="flex items-center space-x-4">
        <button className="text-white">Notifications</button>
        <button className="text-white">Profile</button>
      </div>
    </div>
  )
}

export default TopNavbar