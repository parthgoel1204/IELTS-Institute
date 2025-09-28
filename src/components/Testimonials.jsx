import React from 'react';

const Testimonials = () => {
    return (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <p className="text-sm text-gray-600">
                  "The courses at IELTS Institute have been a game-changer for me. I improved my score by 1.5 bands!"
                </p>
                <h4 className="mt-4 font-semibold text-gray-900">- Jane Doe</h4>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <p className="text-sm text-gray-600">
                  "The speaking practice sessions were incredibly helpful. I felt much more confident on test day."
                </p>
                <h4 className="mt-4 font-semibold text-gray-900">- John Smith</h4>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Testimonials;
