'use client' // 👈 use it here

import React, { useState } from "react";

// Floating Action buttom in bottom right corner for chatbot open and close
const FAB: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="fixed bottom-0 right-0 z-50 mb-4 mr-4">
        <button
          className="p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          onClick={() => setShow(!show)}
        >

          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M284.046,224.8a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,284.046,224.8Zm-110.45,0a34.114,34.114,0,1,0,34.317,34.113A34.217,34.217,0,0,0,173.6,224.8Zm220.923,0a34.114,34.114,0,1,0,34.317,34.113A34.215,34.215,0,0,0,394.519,224.8Zm153.807-55.319c-15.535-24.172-37.31-45.57-64.681-63.618-52.886-34.817-122.374-54-195.666-54a405.975,405.975,0,0,0-72.032,6.357,238.524,238.524,0,0,0-49.51-36.588C99.684-11.7,40.859.711,11.135,11.421A14.291,14.291,0,0,0,5.58,34.782C26.542,56.458,61.222,99.3,52.7,138.252c-33.142,33.9-51.112,74.776-51.112,117.337,0,43.372,17.97,84.248,51.112,118.148,8.526,38.956-26.154,81.816-47.116,103.491a14.284,14.284,0,0,0,5.555,23.34c29.724,10.709,88.549,23.147,155.324-10.2a238.679,238.679,0,0,0,49.51-36.589A405.972,405.972,0,0,0,288,460.14c73.313,0,142.8-19.159,195.667-53.975,27.371-18.049,49.145-39.426,64.679-63.619,17.309-26.923,26.07-55.916,26.07-86.125C574.394,225.4,565.634,196.43,548.326,169.485ZM284.987,409.9a345.65,345.65,0,0,1-89.446-11.5l-20.129,19.393a184.366,184.366,0,0,1-37.138,27.585,145.767,145.767,0,0,1-52.522,14.87c.983-1.771,1.881-3.563,2.842-5.356q30.258-55.68,16.325-100.078c-32.992-25.962-52.778-59.2-52.778-95.4,0-83.1,104.254-150.469,232.846-150.469s232.867,67.373,232.867,150.469C517.854,342.525,413.6,409.9,284.987,409.9Z" />
            {show ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
            )}
          </svg>


        </button>
      </div>
      {show && (
        <div className="fixed bottom-9 right-9 z-40 mb-4 mr-4">
          <div className="p-3 bg-white rounded-lg shadow-lg">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-gray-900 font-bold text-lg">Chatbot</h1>
              <button onClick={() => setShow(!show)}>
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col mt-4 space-y-2">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-between">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <h1 className="text-gray-900 font-bold text-sm">Hi</h1>
                </div>
                <p className="text-xs text-gray-500">2:34 PM</p>
              </div>
              <div className="flex flex-row items-center justify-end">
                <p className="text-xs text-white-900 bg-green-500 rounded-lg p-2">Hello, How can I help you?</p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-between">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <h1 className="text-gray-900 font-bold text-sm">Hi</h1>
                </div>
                <p className="text-xs text-gray-500">2:34 PM</p>
              </div>
              <div className="flex flex-row items-center justify-end">
                <p className="text-xs text-white-900 bg-green-500 rounded-lg p-2">Hello, How can I help you?</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between p-2 bg-gray-100 rounded-lg mt-2">
              <input type="text" className="flex-1 bg-transparent outline-none" placeholder="Type message..." />
              <button>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default FAB;
