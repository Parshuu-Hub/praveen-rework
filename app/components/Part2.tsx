import React from 'react'

function Part2() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">How Our System Operates</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Shortlist the most qualified candidate</h3>
          <p className="text-gray-600">Upload documents and shortlist the most qualified candidates for the top companies.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Sign Up</h3>
          <p className="text-gray-600">Follow the link below to sign up and get access to the current job postings.</p>
          <button className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700">Get Started</button>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">Get Rewards</h3>
          <p className="text-gray-600">As soon as the candidate gets selected you get your benefits.</p>
        </div>
      </div>
    </div>
  )
}

export default Part2;