import Image from 'next/image';
import React from 'react'

function Part1() {
  return (
    <>
    
    <div className="w-full h-[718px] bg-[#F6F6F6]">
      <div className="h-[112px] flex justify-between">
        <div className="w-[139px] h-10 mt-9 ml-[120px] border-[1.43px] bg-[#5C27C0] text-white justify-center text-center rounded-tl-[5.71px] rounded-tr-[5.71px] rounded-bl-[5.71px]">
          <span className="font-normal text-3xl p-1">rework</span>
          <span className="font-normal text-[11.43px]">ai</span>
        </div>
        <div className="flex space-x-8 mt-[44px]  w-[607px] h-[24px]">
          <a
            href="#"
            className="text-gray-700 hover:text-[#5C27C0] hover:underline"
          >
            Talent Finder
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#5C27C0] hover:underline"
          >
            For Recruiters
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#5C27C0] hover:underline"
          >
            For Employers
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#5C27C0] hover:underline"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-[#5C27C0] hover:underline"
          >
            Company
          </a>
        </div>
        <div className="flex space-x-4 mt-9 mr-28">
          <button className="text-[#5C27C0] px-3 py-2 rounded-xl border-[#5C27C0] border-[2px] bg-white h-11 w-36">
            Log In
          </button>
          <button className="text-white px-3 py-2 rounded-md bg-[#5C27C0] h-11 w-36">
            Get Started{" "}
          </button>
        </div>
      </div>
      <div className="mt-16 flex">
        <div className="ml-[120px]">
          <div className="w-[685px] h-[195px]">
            <span className="font-bold text-6xl text-[#5C27C0]">Power Up Your Hiring </span><br/><span className="font-normal text-5xl text-[#5C27C0]">with Rework .</span>
            <p className="pt-6 font-normal text-sm text-[#1C1C1C]">
              Empower your business with cutting-edge A.I. technology,
              simplified processes, and top-tier talent connections. Rework is
              your strategic partner in redefining how you hire{" "}
            </p>
          </div>
          <button className="w-[271px] h-[70px] px-4 py-3 rounded-[20px] shadow-lg shadow-[#AE5DFF] mt-3 bg-[#5C27C0] text-2xl font-normal text-[#F6F6F6]">Book A Demo</button>
          <div className="w-[263px] h-[76px] mt-11 space-y-3">
            <p className="font-normal text-sm text-[#5C27C0]">(✓) No credit Required</p>
            <p className="font-normal text-sm text-[#5C27C0]">(✓) Streamlined Recruitment Process</p>
          </div>
        </div>
        <div>
            <div className="ml-32">
                <Image alt="meeting" src={"/images/meeting.png"} width={567} height={402} className="rounded-full" />
            </div>
            <div className="w-[219px] h-[94px] bg-[#5C27C0] rounded-lg mt-[-160px] ml-[-60px] text-center pt-4 text-[#EFE5FF]">
                <p className="font-bold text-[24.94px]">+10K</p>
                <p className="font-light text-[12.31px] italic">Candidates Hired</p>
            </div>
            <div className="w-[219px] h-[94px] bg-[#5C27C0] rounded-lg mt-[20px] absolute ml-9 text-center pt-4 text-[#EFE5FF]">
                <p className="font-bold text-[24.94px]">+360</p>
                <p className="font-light text-[12.31px] italic">Happy Companies</p>
            </div>

        </div>
      </div>
    </div>
    
    </>
  )
}

export default Part1;