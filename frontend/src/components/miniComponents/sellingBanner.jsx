function SellingBanner(){
    return(
        <section class="bg-white dark:bg-gray-900">
        <div class="py-2 px-2 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Simple & Secure Selling Process</h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Sell your car with ease! Follow our trusted 4-step journey—quick, transparent, and hassle-free.</p>
          </div>
          <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="registerCar.jpeg" alt="Bonnie Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Create Your Free Account</a>
              </h3>
              <p>Start your journey by registering with us.</p>
              
            </div>
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="UploadCar.jpeg" alt="Helene Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#"> Upload Car Photos</a>
              </h3>
              <p>Snap a few pictures of your car and upload them—no stress, just clicks!</p>
              
            </div>
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="inspectionimage.jpeg" alt="Helene Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Expert Car Inspection</a>
              </h3>
              <p>Our experts evaluate your car at your convenience—fast, fair, and accurate.</p>
              
            </div>
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="SoledCar.jpeg" alt="Helene Avatar" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Sell Without the Stress</a>
              </h3>
              <p>Get the best deal and hand over the keys—no delays, no haggling.</p>
              
            </div>

          </div>
        </div>
      </section>
    )
}

export default SellingBanner