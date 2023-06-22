/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useState } from "react";
import { FiDelete, FiPlus } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import { useUiContext } from "../../contexts/UiContext";
import { actioTypes } from "../../reducers/uiReducer";
import { useRouter } from "next/router";
import Link from "next/link";
import { links } from "../../data/links";
import ActiveLink from "./ActiveLink";
import useDarkMode from "../../helpers/useDarkMode";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [mode, toggleMode] = useDarkMode("JobIt-Next-theme-mode");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const router = useRouter();

  const { dispatch, isSidebarOpen } = useUiContext();

  const handleDropdown = () => {
    dispatch({ type: actioTypes.toggleDropdown });
  };

  const handleClose = (e) => {
    if (!e.target.classList.contains("dropdown-btn")) {
      dispatch({ type: actioTypes.closeDropdown });
    }
    if (!e.target.classList.contains("notification-btn")) {
      dispatch({ type: actioTypes.closeNotifications });
    }
  };

  const handleNotifications = () => {
    dispatch({ type: actioTypes.toggleNotifications });
  };

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("mobile-modal"))
      dispatch({ type: actioTypes.closeSidebar });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      setSearch("");
      router.push(`/jobs/search/${search}`);
    }
  };

  return (
    <div
      className="navbar fixed w-full z-10 top-0 left-0 px-[2%]  md:px-[6%] flex-center-between py-[0.35rem] bg-white dark:bg-dark-card border-b dark:border-slate-800"
      onClick={handleClose}
    >

      {/*-------------------------------------- Desktop Menu------------------------------------- */}
      <ul className="hidden md:flex-align-center space-x-3 lg:space-x-6">
        {links.map(({ id, linkText, url }) => (
          <ActiveLink href={url} key={id}>
            {linkText}
          </ActiveLink>
        ))}
      </ul>

      {/*---------------------------------------- Mobile Menu------------------------------------- */}
      <div
        className={`mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50 z-10 opacity-0 pointer-events-none transition-a ${isSidebarOpen && "open"
          }`}
        onClick={handleCloseSidebar}
      >
        <ul
          className={`mobile-dialog absolute flex flex-col space-y-4 p-3 bg-white dark:bg-dark-card h-screen max-w-[300px] w-full -translate-x-[500px] transition-a ${isSidebarOpen && "open"
            }`}
        >
          <div className="flex-center-between border-b dark:border-slate-800">
            <p className="uppercase">menu</p>
            <div
              className="icon-box md:hidden"
              onClick={() => dispatch({ type: actioTypes.closeSidebar })}
            >
              <FiDelete />
            </div>
          </div>
          {links.map(({ id, linkText, url }) => (
            <Link key={id} href={url} end>
              <a onClick={() => dispatch({ type: actioTypes.closeSidebar })}>
                {linkText}
              </a>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex-align-center space-x-2">
        {/*-------------------------------- Post Job------------------------------------------------------- */}
        {/* <Link href="/post">
          <a
            className={`btn !p-2 md:!px-4 btn-primary-light flex-align-center gap-x-2 ${showSearchBar && "hidden"
              }`}
          >
            <FiPlus /> <span className="hidden md:block">post job</span>
          </a>
        </Link>


        <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-700"></div> */}


        {/*------------------------------- Mobile Menu Toogle------------------------- */}
        <motion.div
          className="icon-box md:hidden"
          onClick={() => dispatch({ type: actioTypes.openSidebar })}
          whileTap={{ scale: 0.5 }}
        >
          <BiMenu />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
