import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Badge,
  Rating,
} from "@material-tailwind/react";
import { product } from "./products";

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

export function Product() {
  const [rated, setRated] = useState(4);
  return (
    <Card className="w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8 p-4">
          <div>
            <Typography variant="h5" color="blue-gray">
              Products list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about different products
            </Typography>
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Badge content="5" className="text-xs">
              <IconButton className="rounded-full">
                <ShoppingBagIcon className="h-4 w-4" />
              </IconButton>
            </Badge>
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
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll-y px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <tbody>
            {product.map(
              (
                { title, description, price, stock, thumbnail, rating },
                index
              ) => {
                const isLast = index === product.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index} className="hover:bg-gray-50 justify-between ">
                    <td className={classes}>
                      <div className="flex items-center gap-4 ">
                        {/* <Avatar src={thumbnail} alt={title} size="lg" /> */}
                        <img
                          className="h-40 w-40 rounded-lg object-cover object-center border-2 border-blue-gray-50"
                          src={thumbnail}
                          alt={title}
                        />
                        <div className="flex flex-col justify-between h-40 w-full">
                          <div>
                            <Typography
                              variant="medium"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {title}
                            </Typography>
                            <Typography
                              variant="small"
                              color="green"
                              className="font-normal opacity-70"
                            >
                              {stock} in stock
                            </Typography>
                            <Typography
                              variant="small"
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
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Tooltip content="Add to cart">
                          <Button
                            variant="gradient "
                            className="flex items-center gap-3 rounded-full"
                            size="sm"
                          >
                            <ShoppingBagIcon
                              strokeWidth={2}
                              className="h-4 w-4"
                            />{" "}
                            Add to basket
                          </Button>
                        </Tooltip>
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
  );
}
