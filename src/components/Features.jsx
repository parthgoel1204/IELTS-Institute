import React from 'react';
const Features = () => {
    return (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900">Speaking Practice</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Improve your speaking skills with our interactive practice sessions.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900">Mock Tests</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Take realistic mock tests to gauge your progress and identify areas for improvement.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900">AI Band Score</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Get personalized feedback and AI-generated band scores to track your performance.
                </p>
              </div>
            </div>
          </div>
        </section>
    );
};
export default Features;
