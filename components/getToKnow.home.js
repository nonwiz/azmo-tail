export default function GetToKnowHome() {
  return (
<div className="min-w-screen min-h-screen bg-white flex items-center p-5 lg:p-20 overflow-hidden relative">
    <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full md:w-1/2">
            <div className="mb-10 md:mb-20 text-gray-600 font-light">
              <h1 className="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10">GET TO KNOW AZLA</h1>
                <p className="text-center">Hello, I am Azla from Sabah, Malaysia. currently, I am staying in Thailand as a full-time student. I'm majoring in Bioscience emphasize Community Public Health and Minoring in Education.</p>
            </div>
        </div>
        <div className="w-full md:w-1/2 text-center">
           <img src="/assets/home/vertical_stack.png" className="w-64 h-auto mx-2" />
        </div>
    </div>
    <div className="w-64 md:w-96 h-96 md:h-full bg-cgray-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
    <div className="w-96 h-full bg-cgray-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
</div>
  );
}
