export default function GetToKnowHome() {
  return (
<div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
    <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full md:w-1/2">
            <div className="mb-10 lg:mb-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </div>
            <div className="mb-10 md:mb-20 text-gray-600 font-light">
              <h1 className="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10">GET TO KNOW AZLA</h1>
                <p>Hello, I am Azla from Sabah, Malaysia. currently, I am staying in Thailand as a full-time student. I'm majoring in Bioscience emphasize Community Public Health and Minoring in Education.</p>
            </div>
            <div className="mb-20 md:mb-0">
                <button className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-blue-500 hover:text-blue-600">홈으로 돌아가기</button>
            </div>
        </div>
        <div className="w-full md:w-1/2 text-center">
           <img src="/assets/home/vertical_stack.png" className="w-64 h-64" />
        
        </div>
    </div>
    <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
    <div className="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
</div>
  );
}
