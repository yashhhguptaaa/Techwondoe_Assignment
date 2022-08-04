/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-#FFFFFF">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="flex hover:bg-gray-700 hover:text-white text-#000000 px-3 py-2 rounded-md text-base leading-6 font-normal">
                    About
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="text-#000000 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  text-base leading-6 font-normal">
                    Job Search
                  </a>

                  <a
                    href="#"
                    className="flex text-#000000 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  text-base leading-6 font-normal">
                    Candidates
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="flex text-#000000 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  text-base leading-6 font-normal">
                    Employers
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="text-#000000 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  text-base leading-6 font-normal">
                    Latest News
                  </a>
                  <a
                    href="#"
                    className="text-#000000 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  text-base leading-6 font-normal">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-red-500 hover:text-red-700"
                aria-controls="mobile-menu"
                aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          {(ref: React.LegacyRef<HTMLDivElement> | undefined) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-red-400 text-#000000 hover:text-white block px-3 py-2 rounded-md text-base leading-6 font-normal">
                  About
                </a>

                <a
                  href="#"
                  className="text-#000000 hover:bg-red-400 hover:text-white block px-3 py-2 rounded-md text-base leading-6 font-normal">
                  Job Search
                </a>

                <a
                  href="#"
                  className="text-#000000 hover:bg-red-400 hover:text-white block px-3 py-2 rounded-md text-base leading-6 font-normal">
                  Candidates
                </a>

                <a
                  href="#"
                  className="text-#000000 hover:bg-red-400 hover:text-white block px-3 py-2 rounded-md text-base leading-6 font-normal">
                  Employers
                </a>

                <a
                  href="#"
                  className="text-#000000 hover:bg-red-400 hover:text-white block px-3 py-2 rounded-md text-base leading-6 font-normal">
                  Latest News
                </a>
                <a
                  href="#"
                  className="text-#000000 hover:bg-red-400 hover:text-white block px-3 py-2 rounded-md text-base leading-6 font-normal">
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}