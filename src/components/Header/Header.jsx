import { IoMdSearch } from "react-icons/io";

const Header = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 flex justify-around my-5 lg:my-12">
                <div className=" ">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">CookFood</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                
                <div className="gap-2">
                    <div className="flex items-center">
                    <IoMdSearch className="text-2xl hidden lg:block"/>
                    <input type="text" placeholder="Search" className="input input-bordered rounded-full w-20 lg:w-auto bg-[url('http://www.w3.org/2000/svg')]"/> 
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabindex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabindex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen rounded-3xl" style={{backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/2b8f/f4be/d57b5fb5ad84c9f6a9b1eb9782e9b11b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bL~VLdsv-hRuXW~LIvEdTJne2vh1Xx0I33l~ndKRnQxhJymvKrRGAQEFj6iMi9FKXYy9o~JO5tu7XLBaZFPOH4LqdB1ePmBMeVtBNrYLyHB9~tf-aR3ia965uDSadF8m9QECrpx5TnhX8FdpUEJK92nCiDnMD3qy4lc3GT8VZPqyjoSswP6pCW-3xicITpf8wMaczVaq21kbMm970QukhImhycQ6E1BO9yVxh~vqHAWU9ktR5r5JO0tZR35aCGjHhASku9FbOXKdua1Dr2f2fU1yvc6bpsvSBuAb7eW0xUG8Nh0g9HaMoRoyKbhbq~4~Nm9nUEObIm~wIKpDZdh4YA__)'}}>
                <div className="hero-overlay bg-opacity-40 rounded-3xl"></div>
                <div className="text-center text-neutral-content">
                    <div className="max-w-[900px]">
                        <h1 className="mb-6 text-3xl lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="space-x-6">
                            <button className="btn bg-[#0BE58A] border-0 ring text-black rounded-full">Explore Now</button>
                            <button className="btn border-2 border-white bg-transparent text-white rounded-full ">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;