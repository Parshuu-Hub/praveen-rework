import React from 'react'

function Section2() {
  return (
    <div className="font-sans">
      <section className="h-screen flex flex-col bg-gray-100">
        <header className="flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-center text-gray-900">
            Our Amazing Benefits Helpful For Your Hiring
          </h1>
          <div className="mt-8 text-center text-gray-500">
            <p className="text-lg">
              Cost Reduce 60% Faster Recruitment by TAT
            </p>
            <p className="text-lg">Highly Contextualized Interview</p>
          </div>
        </header>
        <main className="flex flex-col flex-grow justify-center px-4 sm:px-6 lg:px-8">
          <section className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md px-6 py-8">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Zero overhead in the hiring process - promise!
              </h3>
              <p className="text-gray-500 text-base">
                Source top quality candidates for some of the best companies
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-8">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Automated Scheduling in-built ATS
              </h3>
              <p className="text-gray-500 text-base">
                Email & WhatsApp based communication for interview scheduling with automated reminders.
              </p>
            </div>
          </section>
        </main>
      </section>
    </div>
  )
}

export default Section2;