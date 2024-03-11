import React, { useState, useContext, useEffect } from "react";
import { BasketContext } from "../context/BasketContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import {
  PencilIcon,
  UserPlusIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Rating,
  Chip,
} from "@material-tailwind/react";
import { product } from "./dummyData";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Phones",
    value: "phones",
  },
  {
    label: "Laptops",
    value: "laptops",
  },
];

export function Products() {
  const [rated, setRated] = useState(4);
  // const [basketNumOfItems, setBasketNumOfItems] = useState(0);
  const { basketNumOfItems, addToBasket, removeFromBasket } =
    useContext(BasketContext);
  const [localNumOfItems, setLocalUserName] = useState(0);
  console.log(basketNumOfItems);
  return (
    <div className="w-full">
      <div className="sticky top-16 z-10 h-max w-full bg-amber-500 max-w-full justify-center align-middle rounded-none px-4 py-2 lg:px-20 lg:py-3  shadow-none border-b-2 border-gray-100">
        <div className="mb-4 flex items-center   gap-8  pt-4">
          <div className="flex flex-col items-start gap-2">
            <Typography variant="h2" color="blue-gray">
              Products list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about different products
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max bg-transparent">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              variant="outlined"
              size="lg"
              color="amber"
              label="Search"
              className="bg-white w-full border-none"
              placeholder="Search product"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
        </div>
      </div>

      {/* new card boxes */}
      <div className="top-16 z-10 h-max w-full bg-amber-200 max-w-full justify-center align-middle rounded-none px-4 py-2 lg:px-20 lg:py-20  shadow-none border-b-2 border-gray-100">
        <ul>
          {product.map(
            (
              { title, description, price, stock, thumbnail, rating },
              index
            ) => {
              <li></li>;
            }
          )}
        </ul>

        <Card className="w-96 p-0">
          <CardHeader shadow={false} floated={false} className="h-64 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Apple AirPods
              </Typography>

              <Chip
                variant="ghost"
                color="green"
                size="sm"
                value="Promo code applied"
                icon={
                  <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
                }
              />
            </div>
            <Typography color="green" variant="small" className="font-normal">
              24 in Stock
            </Typography>
            <div className="flex items-center gap-2 font-bold text-blue-gray-500">
              <Typography>3.7</Typography>
              <Rating value={4} onChange={(value) => setRated(value)} />
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case.
            </Typography>
            <Typography
              variant="h4"
              color="blue-gray"
              className="font-medium mt-4"
            >
              95.00€
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
        <div>header</div>
        <div>body</div>
      </div>

      <Card
        className="w-full max-w-[60rem] flex-col h-full m-0 justify-center p-4"
        color="transparent"
        shadow={false}
      >
        {/*  */}
        <CardBody className="overflow-scroll-y px-4">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <tbody>
              {product.map(
                (
                  { title, description, price, stock, thumbnail, rating },
                  index
                ) => {
                  const isLast = index === product.length - 1;

                  return (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 p-0 m-0 flex w-full"
                    >
                      <td className="p-0   justify-stretch w-full wr">
                        <div className="flex items-center gap-4  justify-stretch p-4 wrap">
                          <div className="w-40 h-40">
                            <NavLink to={`/products/${index + 1}`}>
                              <img
                                className="h-40 w-40 rounded-lg object-cover object-center border-2 border-blue-gray-50"
                                src={thumbnail}
                                alt={title}
                              />
                            </NavLink>
                          </div>
                          <div className="flex flex-col justify-stretch h-fit flex-1">
                            <div>
                              <NavLink to={`/products/${index + 1}`}>
                                <Typography
                                  variant="h5"
                                  fontSize="lg"
                                  color="blue-gray"
                                  className="font-medium hover:text-deep-orange-900"
                                >
                                  {title}
                                </Typography>
                              </NavLink>
                              <Typography
                                color="green"
                                className="font-normal opacity-70"
                              >
                                {stock} in stock
                              </Typography>
                              <Typography
                                color="blue-gray"
                                className="font-normal opacity-70 w-80"
                              >
                                {description}
                              </Typography>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 font-bold text-blue-gray-500">
                                {rating}
                                <Rating
                                  value={4}
                                  onChange={(value) => setRated(value)}
                                />
                              </div>
                              <Typography
                                variant="h4"
                                color="blue-gray"
                                className="font-medium"
                              >
                                {price}
                              </Typography>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              onClick={() => {
                                addToBasket();
                              }}
                              className="flex items-center gap-3 shadow-none"
                              size="sm"
                            >
                              <ShoppingBagIcon
                                strokeWidth={2}
                                className="h-4 w-4"
                              />{" "}
                              Add to basket
                            </Button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
