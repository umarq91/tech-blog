import React from 'react'

function OurTeam() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">People who made it successful</h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div className="text-center">
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-1.jpg" alt="Team Member 1" />
                <h3 className="mt-4 text-xl font-semibold text-black">Sarah Johnson</h3>
                <p className="mt-2 text-base text-gray-500">CEO & Founder</p>
            </div>

            <div className="text-center">
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-2.jpg" alt="Team Member 2" />
                <h3 className="mt-4 text-xl font-semibold text-black">James Anderson</h3>
                <p className="mt-2 text-base text-gray-500">Chief Marketing Officer</p>
            </div>

            <div className="text-center">
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-3.jpg" alt="Team Member 3" />
                <h3 className="mt-4 text-xl font-semibold text-black">Emily Davis</h3>
                <p className="mt-2 text-base text-gray-500">Chief Technical Officer</p>
            </div>
        </div>

        <div className="mt-8 text-center md:mt-16">
            <a href="#" title="" className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700" role="button"> Join our team </a>
        </div>
    </div>
</section>

  )
}

export default OurTeam
