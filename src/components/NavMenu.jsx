import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { BasketContext } from "../context/BasketContext";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Collapse,
  Avatar,
} from "@material-tailwind/react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
export default function NavMenu() {
  const [openNav, setOpenNav] = useState(false);
  const { user } = useContext(UserContext);
  const { basketNumOfItems, addToBasket, removeFromBasket } =
    useContext(BasketContext);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1  font-medium"
      >
        <NavLink to="/products" className="flex items-center">
          Products
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1  font-medium"
      >
        <NavLink to="#" className="flex items-center">
          Categories
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink to="#" className="flex items-center">
          Best Sellers
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="sticky top-0 z-20 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-3  shadow-none border-b-1 border-gray-100 ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div>
          <Typography
            variant="h4"
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 "
          >
            🛒 Shopping
          </Typography>
        </div>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="flex items-center gap-4">
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row justify-center items-center">
            <div className="flex flex-col gap-none pl-2">
              <Typography variant="small" color="gray" className="font-normal">
                Shopping
              </Typography>
              <Typography variant="h6">Basket</Typography>
            </div>
            <Badge
              content={basketNumOfItems > 0 ? basketNumOfItems : 0}
              className={basketNumOfItems > 0 ? "text-xs bg-red-500" : "hidden"}
            >
              <IconButton className="rounded-full ">
                <ShoppingBagIcon className="h-4 w-4 " />
              </IconButton>
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-black p-1 rounded-full ">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                size="sm"
              />
              <div>
                <Typography
                  variant="h6"
                  className="font-medium mr-2 uppercase "
                  color="white"
                >
                  {user ? <p>{user.userName}</p> : <p>Not logged in</p>}
                </Typography>
              </div>
            </div>
            <Button variant="text" color="blue-gray" size="sm">
              Logout
            </Button>
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" className="">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="">
            <span>Sign in</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
