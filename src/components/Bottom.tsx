import Image from "next/image"
import signature from "../../public/signature.svg"

const Bottom = () => {
    return (
        <footer className='m-auto p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 min-h-screen flex flex-col items-center justify-center bg-stone-950 shadow-2xl dark:shadow-white shadow-black  rounded-t-full transition-colors duration-300'>
            <div className='flex justify-center items-center flex-col text-center max-w-4xl mx-auto px-4'>
                {/* Main Heading - Responsive Typography */}
                <h1 className='text-white dark:text-white light:text-stone-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight transition-colors duration-300'>
                    By A <br className='hidden sm:block' />
                    <span className='sm:hidden'> </span>
                    Unicellular <br className='hidden sm:block' />
                    <span className='sm:hidden'> </span>
                    Developer
                </h1>

                {/* Description Paragraph - Responsive */}
                <p className='text-black dark:text-white light:text-stone-700 text-base sm:text-lg md:text-xl max-w-2xl mt-6 sm:mt-8 px-2 leading-relaxed transition-colors duration-300'>
                    By the way this footer was built with mistake haha i was trying to make the top border little round but i ended up making it a globe!
                </p>

                {/* Call to Action - Responsive */}
                <p className='text-white dark:text-white light:text-stone-800 mt-6 sm:mt-8 md:mt-10 bg-stone-800 dark:bg-stone-800 light:bg-stone-200 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base max-w-xs sm:max-w-md text-center transition-colors duration-300'>
                    That&apos;s my Github right there, click the little icon, it was huge before, I Forgot how to resize it.
                </p>
            </div>

            {/* Spacer - Responsive */}
            <div className='mt-8 sm:mt-10 md:mt-12'></div>
            <div className="flex justify-center items-center gap-10 flex-col md:flex-row ">
                <div>

                    {/* GitHub Link - Responsive Icon */}
                    <a
                        href="https://github.com/shahabuddin135"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 active:opacity-55 cursor-pointer transition-all duration-200 flex items-center group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 text-white dark:text-white light:text-stone-900 group-hover:scale-110 transition-all duration-200"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.47 11.47 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>

                    {/* GitHub Label - Responsive */}



                    <p className='text-white dark:text-white light:text-stone-700 text-xs sm:text-sm mt-3 sm:mt-4 transition-colors duration-300'>
                        My GitHub
                    </p>
                </div>

                <Image className="h-20 transform rotate-30 md:h-32 w-auto text-black invert" src={signature} alt="moon" height={50} width={50} />

            </div>
        </footer>
    )
}

export default Bottom