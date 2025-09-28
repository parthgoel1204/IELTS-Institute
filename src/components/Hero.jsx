import React from 'react';

const Hero = () => {
    return (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Achieve Your IELTS Goals with Confidence
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
                Our expert tutors and comprehensive courses will guide you to success.
              </p>
              <div className="mt-5 max-w-lg mx-auto sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Start Your Journey
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};
    
export default Hero;
