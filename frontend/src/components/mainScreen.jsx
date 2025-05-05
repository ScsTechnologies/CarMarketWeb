import { useState } from 'react'
import NavBar from './navabar'
import { Typewriter } from 'react-simple-typewriter';
import { FaCar } from "react-icons/fa";
import MiniBanner from './miniComponents/miniBanner';
import SellingBanner from './miniComponents/sellingBanner';

function Main() {

  return (
    <>
      <NavBar />
      <div class=" bg-gray-900 h-100vh">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div class="mr-auto place-self-center lg:col-span-7">
            {/* <h1
              class="max-w-2xl text-white mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white animate-bounce">Buy &amp; Sell Your Car in minutes.
            </h1> */}
            <h1 className="max-w-2xl text-white mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              <Typewriter
                words={['Buy & Sell Your Car in minutes.',]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={2000}
              />
            </h1>

            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Buy and sell cars with ease. Trusted listings, verified sellers, and great deals—all in one place.

            </p>

            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

              <a href="" target="_blank"
                class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <FaCar className='m-2' />
                Sell your Car
              </a>

              <a href="" target="_blank"
                class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">

                <FaCar className='m-3' />
                Buy a Car
              </a>

            </div>
          </div>

          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="car.png" alt="hero image" />
          </div>

        </div>
      </div>

      <MiniBanner/>
      <SellingBanner/>
      

    </>
  )
}

export default Main
