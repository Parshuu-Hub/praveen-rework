import React from 'react'

function Part3() {
  return (
    <div className="pricing-table bg-gray-100 p-8">
      <div className="text-center pb-8">
        <h2 className="text-3xl font-bold text-gray-800">Choose Your Simple, Transparent Pricing</h2>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:gap-10">
        <div className="w-full bg-white rounded-lg shadow-md p-6 md:w-1/3">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Most Popular</h3>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800 mb-2">₹199.00/month</p>
            <p className="text-gray-600">Suitable for companies with 5-10 openings</p>
          </div>
          <ul className="list-disc text-gray-600 mt-4">
            <li>10 interview-ready candidates</li>
            <li>Unlimited job postings</li>
            <li>Receive pre-vetted profiles within 48 hours</li>
            <li>Dedicated account manager</li>
            <li>Assistance with interview scheduling</li>
            <li>Custom reports</li>
          </ul>
          <button className="w-full py-2 mt-8 font-bold text-center bg-blue-500 text-white rounded-md hover:bg-blue-700">Get Started</button>
        </div>
        <div className="w-full bg-white rounded-lg shadow-md p-6 md:w-1/3">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Most Popular</h3>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800 mb-2">₹149.00/month</p>
            <p className="text-gray-600">Suitable for companies with 5-10 openings</p>
          </div>
          <ul className="list-disc text-gray-600 mt-4">
            <li>10 interview-ready candidates</li>
            <li>Unlimited job postings</li>
            <li>Receive pre-vetted profiles within 48 hours</li>
            <li>Dedicated account manager</li>
            <li>Assistance with interview scheduling</li>
            <li>Custom reports</li>
          </ul>
          <button className="w-full py-2 mt-8 font-bold text-center bg-blue-500 text-white rounded-md hover:bg-blue-700">Get Started</button>
        </div>
        <div className="w-full bg-white rounded-lg shadow-md p-6 md:w-1/3">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Most Popular</h3>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800 mb-2">₹169.00/month</p>
            <p className="text-gray-600">Suitable for companies with 5-10 openings</p>
          </div>
          <ul className="list-disc text-gray-600 mt-4">
            <li>10 interview-ready candidates</li>
            <li>Unlimited job postings</li>
            <li>Receive pre-vetted profiles within 48 hours</li>
            <li>Dedicated account manager</li>
            <li>Assistance with interview scheduling</li>
            <li>Custom reports</li>
          </ul>
          <button className="w-full py-2 mt-8 font-bold text-center bg-blue-500 text-white rounded-md hover:bg-blue-700">Get Started</button>
          <button className="w-full py-2 mt-8 font-bold text-center bg-white-500 text-white rounded-md hover:bg-blue-700">Book a Demo</button>
        </div>
      </div>
    </div>
  )
}

export default Part3;