import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Logo from "media/newBrandv2/whitelogo.png"
import TelIcon from "media/newBrandv2/call.png"

const Header = () => {
    const [showSubMenu, setShowSubMenu] = useState(true);
    const [menuOpen, setMenuOpen] = useState(true); // Set to false initially
    const toggleSubMenu = () => {
        setShowSubMenu((prevShowSubMenu) => !prevShowSubMenu);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

    };
    const [isSticky, setIsSticky] = useState(false);
    const [isIdle, setIsIdle] = useState(false);
    const timeoutIdRef = useRef(null);

    const handleScroll = () => {
        // Clear the previous timeout if there's any
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }

        if (window.scrollY > 50) {
            setIsSticky(true);
            setIsIdle(false);

            // Set a new timeout to set isIdle to true after 3 seconds of no scrolling
            timeoutIdRef.current = setTimeout(() => {
                setIsIdle(true);
            }, 3000);
        } else {
            setIsSticky(false);
            setIsIdle(false);
        }
    };

    useEffect(() => {
        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, []);
    return (
        <>
            {/* <TOPHEADER1 /> */}
            <div className={` ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''} ${isIdle ? '!-top-full' : ' '} w-full ppmori px-0 sm:!px-0 xs:!px-0 pt-0 transition-all duration-1000 ease-in-out `}>
                <header className={`bg-gradient-to-b from-[#191919] to-[#00000000] ${isSticky ? '' : 'mr-md:h-[300px]'} absolute w-full z-30 py-5`}>
                    <div className="max-w-7xl mx-auto px-4 mr-md:px-8 mr-2xl:px-0">
                        <div className="items-center justify-between gap-x-4 flex grid-cols-2 grid-rows-1">
                            <div className="flex-shrink-0">
                                <Link href="/" className="text-xl font-bold text-indigo-500">
                                    <Image quality={95} src={Logo} alt=" Best Selling Publisher Ghostwriting logo" width={180} height={50} priority={true} />
                                </Link>
                            </div>
                            <nav className="flex w-full justify-end mr-xl:gap-x-[110px] mr-2xl:gap-x-[210px] space-x-4 text-[16px] text-[#1d1d1f] font-medium">
                                <ul id="menu" className={`${menuOpen ? 'transform translate-x-0 mr-2xl:!flex mr-xl:!flex mr-lg:!hidden md:hidden xs:hidden sm:hidden' : 'flex items-center transition-transform duration-500  ease-in-out translate-x-0 md:translate-x-0 right-0 xs:text-white sm:text-white md:text-white mr-lg:bg-[#2d2d2d] md:bg-[#2d2d2d] sm:bg-[#2d2d2d] mr-lg:!z-50 md:z-50 sm:z-50 md:text-[18px] xs:text-[18px] sm:text-[18px] mr-2xl:!hidden mr-xl:!hidden mr-lg:!block md:block xs:block sm:block xs:fixed sm:fixed md:fixed mr-lg:!fixed xs:top-0 sm:top-0 md:top-0 mr-lg:top-0 sm:py-16 md:py-16 mr-lg:!py-16 mr-lg:!px-10 md:px-10 sm:px-10 mr-2xl:!w-full mr-xl:!w-full mr-lg:!w-[70%] md:w-[70%] mr-lg:!h-full md:h-full xs:w-[320px] xs:h-full sm:w-[300px] sm:h-full xs:right-0 md:right-0 mr-lg:right-0 xs:px-10 leading-9 xs:!p-5 xs:bg-[#2d2d2d] xs:z-50 text-[#1d1d1f] '} flex items-center mr-xl:gap-x-12 mr-lg:gap-x-4 gap-x-3 text-[#1d1d1f] cursor-default overflow-visible sm:!overflow-hidden xs:!overflow-hidden sm:!overflow-y-scroll xs:!overflow-y-scroll `}>
                                    <li className="xl:hidden lg:hidden mr-2xl:!hidden mr-xl:!hidden mr-lg:!block sm:z-90 xs:z-90 fixed top-4 right-6">
                                        <Link href="javascript:void(0)" className="text-right mr-2xl:!text-white mr-xl:!text-white  mr-lg:!text-white text-white text-4xl" onClick={toggleMenu}>
                                            &times;
                                        </Link>
                                    </li>
                                    {[
                                        ['Home', '#'],
                                        ['Services', '#'],
                                        ['Our Portfolio', '#'],
                                        ['Blogs', '#'],
                                        ['Contact', '#contact']
                                    ].map(([title, url]) => (
                                        <li className='mr-lg:!mb-0 !mb-3'>
                                            <Link href={url} className={`list mr-2xl:!text-white mr-xl:!text-white  mr-lg:!text-white md:!text-white sm:!text-white text-white xs:!text-white mr-2xl:text-[15px] mr-xl:text-[15px] mr-lg:text-xl mr-md:text-xl mr-sm:text-xl xs:text-[20px] font-medium`}>{title}</Link>
                                        </li>
                                    ))}

                                </ul>
                                <ul className='btn'>
                                    <li className='mr-lg:!mb-0 !mb-3 block sm:hidden xs:hidden'>
                                        <Link href="tel:012-345-6789" className={`__animatedPing text-[15px] transition-all ease-in-out duration-300 group xs:text-[20px] ppmori border-2 border-[#40BEE2] bg-[#40BEE2] py-2 px-4 text-[#40BEE2] flex items-center gap-x-3 font-[500] hover:bg-transparent rounded-[50px] hover:border-2 hover:border-white`}>
                                            <Image src={TelIcon} alt='Amazon Book Publishing' className='transition-all ease-in-out duration-300' priority={true} />
                                            <span className=' text-white group-hover:!text-white pt-[2px]'>012-345-6789</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="flex items-center mr-2xl:hidden mr-xl:hidden mr-lg:block md:block xs:block sm:block z:-1">
                                <button
                                    className={`text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300 ${menuOpen ? '&times;' : ''
                                        }`}
                                    onClick={toggleMenu}
                                >
                                    &#9776;
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header;