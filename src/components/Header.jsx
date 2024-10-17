import React from "react";
import '../App.css';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavbarItems = ({ title, classProps }) => {
    return <li className={`mx-8 cursor-pointer  ${classProps}`}>{title}</li>;
};

const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return(
    //     "z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
    // flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
        <div className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='arapey-regular text-white text-4xl md:flex-[0.5] flex-initial justify-center items-center cursor-pointer'>
                Raisspour.fx
            </div>
            <div className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {["Home", "Products", "About"].map((item, index) => (
                    <NavbarItems key={item + index} title={item} />
                ))}
            </div>
            <div className="flex relative transition">
                {toggleMenu ? (
                    <AiOutlineClose
                        fontSize={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <HiMenuAlt4
                        fontSize={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <ul
                        className="z-10 fixed -top-0 -right-2 p-3 w-[60vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Home", "Products", "About"].map(
                            (item, index) => (
                                <NavbarItems
                                    key={item + index}
                                    title={item}
                                    classProps="my-2 text-lg"
                                />
                            )
                        )}
                        {/* <li className="bg-[#2952e3] cursor-pointer py-2 px-7 mx-4 rounded-full hover:bg-[#2546bd]">
              Login
            </li> */}
                    </ul>
                )}
            </div>
        </div>
    )

}
export default Header;
