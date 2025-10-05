import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";


const Header = () => {

    const navlinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
        { name: "Services", link: "/services" },

    ]
    return (
        <div className='container mx-auto py-4'>

            {/* start  */}
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white">
                       {
                        navlinks.map((item, idx)=>(
                           
                                 <Link key={idx} href={`${item.link}`}>
                                {
                                    item.name
                                }
                            </Link>
                          
                        ))
                       }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                     <Image src={"/Frame_1.gif"} alt='fda' width={70} height={70}></Image>
                </a>
            </div>
            {/* end  */}

            <div className='lg:flex justify-between items-center hidden'>
                <div>
                    <Image src={"/Frame_1.gif"} alt='fda' width={70} height={70}></Image>
                </div>
                <div className='text-sm font-semibold flex gap-10 rounded-2xl bg-white/10 text-white py-3 px-4'>
                    {
                        navlinks.map((item, idx) => (
                            <Link key={idx} href={`${item.link}`}>
                                {
                                    item.name
                                }
                            </Link>
                        ))
                    }
                </div>

                {/* //btn  */}
                <div className='flex gap-2 items-center'>
                    <button className="btn bg-[#362062] rounded-full text-2xl h-14 w-14 text-white"><CiShoppingCart />
                    </button>
                    <Image className='rounded-full' height={70} width={70} src={'/img-17-BGIcbcRk.jpg'}></Image>
                </div>
            </div>
        </div>
    )
}

export default Header