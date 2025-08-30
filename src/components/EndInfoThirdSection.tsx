import React from 'react'

const EndInfoThirdSection = () => {
  return (
    <main className='m-auto mb-5 md:mb-10 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 min-h-screen flex items-center justify-center bg-white dark:bg-stone-900 transition-colors duration-300'>
        <div className='w-full max-w-7xl'>
            <div className='overflow-hidden'>
                {/* First Line - THANK YOU */}
                <div className='mb-4 sm:mb-6 md:mb-8'>
                    <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[200px] font-black leading-none tracking-tight text-stone-900 dark:text-white transition-colors duration-300 break-words'>
                        THANK YOU,
                    </h1>
                </div>

                {/* Second Line - BYE with Blue Bar */}
                <div className='flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12'>
                    <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[200px] font-black leading-none tracking-tight text-stone-900 dark:text-white transition-colors duration-300 flex-shrink-0'>
                        BYE!
                    </h1>
                    
                    {/* Responsive Blue Bar */}
                    <div className='bg-blue-500 dark:bg-blue-400 h-8 sm:h-16 md:h-24 lg:h-32 xl:h-36 w-full'/>
                </div>
            </div>

            {/* Scribble Text - Responsive */}
            <div className='mt-8 sm:mt-10 md:mt-12'>
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-stone-700 dark:text-stone-300 leading-relaxed max-w-4xl transition-colors duration-300 font-medium'>
                    I cannot code much, i am super bored! 
                    <span className='text-red-500 dark:text-red-400 inline-block mx-1'>
                        ##$%
                    </span> 
                    <span className='text-purple-600 dark:text-purple-400 font-extrabold tracking-wider'>
                        ScRibBLE!
                    </span>
                    <span className='text-orange-500 dark:text-orange-400'>
                        *#
                    </span> 
                    <span className='text-green-600 dark:text-green-400 font-semibold italic'>
                        Ahhh ...
                    </span> 
                    <span className='text-red-600 dark:text-red-400 underline decoration-wavy'>
                        This HeadAche...
                    </span>
                </p>
            </div>

            {/* Optional: Fun animated elements for mobile */}
            <div className='flex justify-center mt-8 sm:mt-12 space-x-2 sm:hidden'>
                <div className='w-2 h-2 bg-blue-500 rounded-full animate-bounce'></div>
                <div className='w-2 h-2 bg-purple-500 rounded-full animate-bounce' style={{animationDelay: '0.1s'}}></div>
                <div className='w-2 h-2 bg-red-500 rounded-full animate-bounce' style={{animationDelay: '0.2s'}}></div>
            </div>
        </div>
    </main>
  )
}

export default EndInfoThirdSection