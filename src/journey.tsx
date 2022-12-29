import React from 'react';

export function Journey() {
    return (
        <div className="flow-root mx-4">
            <div className='text-center font-bold text-4xl' >
                Deep Lawn's Journey
            </div>
            <div className="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
                <div className="py-3 sm:max-w-7xl sm:mx-auto w-full px-2 sm:px-0">
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">
                        {/* Vertical bar running through middle */}
                        <div className="z-0 block w-1 bg-gray-600 absolute h-full left-1/2 transform -translate-x-1/2" />
                        {/* Left section, set by justify-start and sm:pr-8 */}
                        <div className="z-40 mt-10 sm:mt-0 sm:mb-12 relative">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-12">
                                        <div className='flex justify-center' >

                                            <img className='rounded-lg' src="https://res.cloudinary.com/dcomv7wly/image/upload/v1671906624/the-beginning_fjhsar.jpg" alt="" />


                                        </div>
                                        <div className="text-justify p-4 bg-white rounded shadow text-xl font-normal">
                                            Joel and Toby Northrup incorporated their lawn care business in 2011. At first, it was a way to save money for college, but quickly became much more than that. The brothers had their challenges along the way, but grew the business as they added additional services and opened up a few satellite branches across Eastern Iowa.
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-white  shadow-[inset_0_3px_6px_0_rgb(0,0,0,16%)] border-white border-2 sm:border-8 w-10 sm:w-24 h-10 sm:h-24  absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <p className="text-sm sm:text-[1.2rem]">2011</p>
                                </div>
                            </div>
                        </div>
                        {/* Right section, set by justify-end and sm:pl-8 */}
                        <div className="z-40 mt-20 sm:mt-0 sm:mb-12 relative">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-end w-full mx-auto items-center">

                                    <div className="w-full sm:w-1/2 sm:pl-12">

                                        <div className='flex justify-center' >

                                            <img className="rounded-lg" src="https://res.cloudinary.com/dcomv7wly/image/upload/v1671906625/The-Acquisition_to2fzq.jpg" alt="" />


                                        </div>
                                        <div className="text-justify p-4 bg-white rounded shadow text-xl font-normal">
                                            In 2019, the brothers received an offer from a larger company in the area to acquire their company. The offer was too good to turn down so Joel and Toby decided to sell the company. After 8 long years of work in the lawn care industry, the brothers were excited to take a break. Little did they know that they would someday work again in the green industry.
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-white  shadow-[inset_0_3px_6px_0_rgb(0,0,0,16%)] border-white border-2 sm:border-8 w-10 sm:w-24 h-10 sm:h-24  absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <p className="text-sm sm:text-[1.2rem]">2019</p>
                                </div>
                            </div>
                        </div>
                        {/* Left section, set by justify-start and sm:pr-8 */}
                        <div className="z-40 mt-20 sm:mt-0 sm:mb-12 relative">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-12">
                                        <div className='flex justify-center' >

                                            <img className="rounded-lg" src="https://res.cloudinary.com/dcomv7wly/image/upload/v1671906625/The-Idea_uysgf8.jpg" alt="" />


                                        </div>
                                        <div className="text-justify p-4 bg-white rounded shadow text-xl font-normal">
                                            Shortly after the acquisition, Joel graduated from the University of Iowa and moved to Texas to work as a machine learning engineer at Samsung. Toby entered his Junior year at the University of Iowa as an engineering student. During nights and weekends, Joel began to think about using Machine Learning to automatically measure lawns. This would solve one of the key issues that Joel and Toby's lawn care company had faced - not being able to give quotes quickly and accurately. The brothers also saw huge potential. In a world where everyone owns a smartphone, and regularly makes 1-click purchases on Amazon, why are there no lawn care companies that offer online ordering? Joel and Toby set about to solve these problems as they coded after work/class, and every weekend for over a year.
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-white  shadow-[inset_0_3px_6px_0_rgb(0,0,0,16%)] border-white border-2 sm:border-8 w-10 sm:w-24 h-10 sm:h-24  absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <p className="text-sm sm:text-[1.2rem]">2020</p>
                                </div>
                            </div>
                        </div>
                        {/* Right section, set by justify-end and sm:pl-8 */}
                        <div className="z-40 mt-20 sm:mt-0 relative">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-12">
                                        <div className='flex justify-center' >

                                            <img className="rounded-lg" src="https://res.cloudinary.com/dcomv7wly/image/upload/v1671906624/Screen_Shot_2022-09-08_at_9.01.49_PM_ptxodh.png" alt="" />


                                        </div>
                                        <div className="text-justify p-4 bg-white rounded shadow text-xl font-normal">
                                            In early 2021, Joel, Toby, and a few early employees launched Deep Lawn in beta with 10 companies across the country. This early period of testing and getting feedback was crucial to improving the product. Later that year, Deep Lawn opened to the public. Since the launch, Deep Lawn has constantly been innovating and building tools to make life easier, more efficient, and bring ROI to lawn care, pest control and snow removal companies all over the USA and Canada. What started as a high school side hustle, has become a software business that is changing the game in the outdoor services industries.
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-white  shadow-[inset_0_3px_6px_0_rgb(0,0,0,16%)] border-white border-2 sm:border-8 w-10 sm:w-24 h-10 sm:h-24  absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <p className="text-sm sm:text-[1.2rem]">2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
