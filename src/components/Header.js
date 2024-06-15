import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { search, selectCategory } from "../actions/Action";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOGOUT } from "../actions/ActionType";

export default function Header() {
  const currentSearch = useRef();
  const category = useRef();
  const itemsLength = useSelector((state) => state.cart.itemsLength);
  const data = useSelector((state) => state.data.products);
  const ctgy = data.map((product) => product.category);
  const setCatey = new Set(ctgy);
  const listCatecories = Array.from(setCatey);
  const dispatch = useDispatch();
  const handlSearchClick = (e) => {
    e.preventDefault();
    dispatch(search(currentSearch.current.value));
  };
  const handlSelectCategory = () => {
    dispatch(selectCategory(category.current.value));
  };
  const itemNave =
    " hover:bg-black  px-2 py-2 mx-1 text-black/60 transition duration-100  text-center hover:text-white rounded-full active:bg-black avtive:rounded-full";
  console.log(JSON.parse(localStorage.getItem("user")));
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const handleClickLogout = () => dispatch({ type: LOGOUT });

  return (
    <>
      <nav
        className="relative flex w-full flex-row items-center justify-between bg-[#FFFFFF] drop-shadow-sm py-2 shadow-dark-mild lg:flex-wrap  lg:py-4"
        data-twe-navbar-ref
      >
        <div className="flex w-full h-fit lg:items-end sm:items-center flex-wrap  justify-between px-3">
          <div className="mx-2   my-auto">
            <Link className="text-xl text-black" to={"/"}>
              <img src="/logo.png" className="w-32 h-22" />
            </Link>
          </div>

          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent11"
            aria-controls="navbarSupportedContent11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className="!visible mt-2 hidden items-start lg:justify-center justify-between   flex-grow basis-[100%] h-full  lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent11"
            data-twe-collapse-item
          >
            <div className="  ">
              <Link to={"/products"}>
                <form className="w-full h-fit flex flex-row ">
                  <input
                    type="text"
                    ref={currentSearch}
                    onChange={handlSearchClick}
                    className=" lg:h-10 lg:px-3 w-10/12  rounded-l-full border shadow focus:outline-none "
                    placeholder="Search"
                  />

                  <button
                    onClick={handlSearchClick}
                    className="rounded-r-full lg:h-10 lg:w-16 bg-[#EBEBEB] border shadow"
                  >
                    <span className="[&>svg]:w-5 flex flex-row justify-center [&>svg]:text-neutral-500 text-center [&>svg]:stroke-black/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        {" "}
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                      </svg>
                    </span>
                  </button>
                </form>
              </Link>

              <ul
                className="list-style-none mt-2 me-auto w-full flex justify-center flex-col ps-0 lg:mt-1 lg:flex-row"
                data-twe-navbar-nav-ref
              >
                <li
                  className="my-4 ps-2  bg-black text-white p-2 w-20 text-center rounded-full lg:my-0 lg:pe-1 lg:ps-2"
                  data-twe-nav-item-ref
                >
                  <Link
                    className=" transition duration-200 my-auto   hover:ease-in-out  active:text-black/80 motion-reduce:transition-none lg:px-2"
                    aria-current="page"
                    to={"/"}
                    data-twe-nav-link-ref
                  >
                    Home
                  </Link>
                </li>

                

                <li
                  className={"mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" + itemNave}
                  data-twe-nav-item-ref
                >
                  <Link
                    className="p-0  transition duration-200 hover:ease-in-out  active:text-black/80 motion-reduce:transition-none lg:px-2"
                    to={"/saved"}
                    data-twe-nav-link-ref
                  >
                    Saved
                  </Link>
                </li>
                <li
                  className={"mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" + itemNave}
                  data-twe-nav-item-ref
                >
                  <Link
                    className="p-0  transition duration-200  hover:ease-in-out active:text-black/80 motion-reduce:transition-none lg:px-2"
                    to={"/products"}
                    data-twe-nav-link-ref
                  >
                    Products
                  </Link>
                </li>
                <li
                  className={"mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" + itemNave}
                  data-twe-nav-item-ref
                >
                  <Link
                    className="p-0  transition duration-200  hover:ease-in-out  active:text-black/80 motion-reduce:transition-none lg:px-2"
                    to={"/cart"}
                    data-twe-nav-link-ref
                  >
                    Cart
                  </Link>
                </li>
                <li
                  className={"mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" + itemNave}
                  data-twe-nav-item-ref
                >
                  <Link
                    className="p-0  transition duration-200  hover:ease-in-out  active:text-black/80 motion-reduce:transition-none lg:px-2"
                    to={"/selling"}
                    data-twe-nav-link-ref
                  >
                    Selling
                  </Link>
                </li>

                <li
                  className={"mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" + itemNave}
                  data-twe-nav-item-ref
                >
                  <Link
                    className="p-0  transition duration-200  hover:ease-in-out  active:text-black/80 motion-reduce:transition-none lg:px-2"
                    to={"/about"}
                    data-twe-nav-link-ref
                  >
                    About
                  </Link>
                </li>
                <li
                  className={"mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" + itemNave}
                  data-twe-nav-item-ref
                >
                  <Link
                    className="p-0  transition duration-200  hover:ease-in-out  active:text-black/80 motion-reduce:transition-none lg:px-2"
                    to={"/contact"}
                    data-twe-nav-link-ref
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="h-full ">
              <div className="flex flex-row items-start gap-5  justify-between">
                <select
                  onChange={handlSelectCategory}
                  ref={category}
                  className="border w-60 h-fit text-center rounded-full p-1 focus:outline-none focus:border-gray-500"
                >
                  <option>All Categories</option>
                  {listCatecories.map((category) => {
                    return (
                      <option value={category}>
                        <span className="hover:bg-black hover:text-white cursor-pointer">
                          {category}
                        </span>
                      </option>
                    );
                  })}
                  <option value="option1">
                    <span className="hover:bg-black hover:text-white cursor-pointer">
                      Option 1
                    </span>
                  </option>
                  <option value="option2">
                    <span className="hover:bg-black hover:text-white cursor-pointer">
                      Option 2
                    </span>
                  </option>
                  <option value="option3">
                    <span className="hover:bg-black hover:text-white cursor-pointer">
                      Option 3
                    </span>
                  </option>
                </select>
                <div>
                  {isAuth ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        {" "}
                        <span className="[&>svg]:w-6 [&>svg]:stroke-black/50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            {" "}
                            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                          </svg>
                        </span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem> <Link
                    className="p-0   hover:ease-in-out active:text-black/80 motion-reduce:transition-none lg:px-2"
                    to={"/profile"}
                    data-twe-nav-link-ref
                  >
                    Profile
                  </Link></DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                        <DropdownMenuItem>
                          <LogOut className="mr-2 h-4 w-4" />
                          <span onClick={handleClickLogout}>Log out</span>
                          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <span className="[&>svg]:w-6 [&>svg]:stroke-black/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        {" "}
                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                      </svg>
                    </span>
                  )}
                </div>

                <div className=" relative">
                  <span className="[&>svg]:w-6 [&>svg]:stroke-black/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                  </span>
                  {itemsLength > 0 && (
                    <span className="absolute  bg-red-500  top-3 left-2   text-white -mt-4 ms-2.5 rounded-full bg-danger shadow px-[0.35rem] py-[0.15em] text-[0.6rem] font-bold leading-none ">
                      {itemsLength}
                    </span>
                  )}
                </div>
                <div>
                  <span className="[&>svg]:w-6 [&>svg]:stroke-black/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="w-fit flex mt-2 gap-4   flex-row   ms-24 ">
                {!isAuth && (
                  <Link
                    className=" px-6 py-2 rounded-md motion-reduce:transition-none bg-black text-white "
                    to={"/signup"}
                  >
                    Sign Up
                  </Link>
                )}
                {!isAuth && (
                  <Link
                    className=" px-6 py-2 rounded-md motion-reduce:transition-none bg-[#EBEBEB] text-black"
                    to={"/login"}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
