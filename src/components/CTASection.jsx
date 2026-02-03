import React from 'react'

const CTASection = () => {
    return (
        <div className="overflow-hidden py-16 border rounded-2xl shadow-[0_10px_30px_rgba(43,187,173,0.1)] mb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Left Card - Fully merged into background with glass effect */}
                    <div className="relative flex justify-start">
                        <div className="relative w-full max-w-md">

                            {/* Glassmorphism card - no outer shadow */}
                            <div className=" p-10 w-full transition-all duration-500 hover:bg-white/25 hover:-translate-y-0.5 relative overflow-hidden">
                                {/* <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Welcome Back!</h2> */}

                                {/* Social login buttons */}
                                <div className="flex flex-col gap-4 mb-6">
                                    <button className="flex items-center justify-center gap-2 py-2 px-4 border rounded-full hover:bg-[#2BBBAD] hover:text-white transition">
                                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg" alt="Google" className="w-5 h-5" />
                                        Continue with Google
                                    </button>
                                    <button className="flex items-center justify-center gap-2 py-2 px-4 border rounded-full hover:bg-gray-200 transition">
                                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" className="w-5 h-5" />
                                        Continue with GitHub
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="flex items-center justify-center gap-2 mb-6 text-gray-400">
                                    <span className="border-t flex-1"></span>
                                    <span>OR</span>
                                    <span className="border-t flex-1"></span>
                                </div>

                                {/* Email login/register */}
                                <form className="flex flex-col gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none "
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-[#2BBBAD] text-white py-2 rounded-full font-semibold hover:bg-[#259e92] transition"
                                    >
                                        Register / Login
                                    </button>
                                </form>

                                {/* Optional footer */}
                                <p className="mt-6 text-sm text-gray-500 text-center">
                                    By continuing, you agree to our <a href="#" className="text-[#2BBBAD] underline">Terms & Conditions</a>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:pl-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-[#2BBBAD]">Let's Go</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Start Your Journey Today</p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <svg viewBox="0 0 20 20" fill="currentColor" className="absolute top-1 left-1 h-5 w-5 text-indigo-600">
                                            <path d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" />
                                        </svg>
                                        Push to deploy.
                                    </dt>
                                    <dd className="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CTASection
