import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Rating,
  ButtonGroup,
} from "@material-tailwind/react";
import { product } from "./dummyData";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
export function ProductDetail() {
  const [rated, setRated] = useState(4);
  return (
    <Card className="w-full max-w-[60rem] flex-row h-full">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://m.media-amazon.com/images/I/512Wg9SvQsL._AC_SL1500_.jpg"
          alt="card-image"
          className="h-full w-full object-cover hover:scale-110 ease-in duration-200"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="my-4 ">
          Smart Phone
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Apple iPhone 14 (128 GB) - Polarstern
        </Typography>
        <div className="flex items-center gap-2 font-bold text-blue-gray-500 ">
          4.5
          <Rating value={4} onChange={(value) => setRated(value)} />
        </div>
        <Typography className="text-sm mb-6">5 Left in Stock</Typography>

        <Typography color="gray" className="mb-8 font-normal">
          Batterielaufzeit für den ganzen Tag und bis zu 20 Std.
          Videowiedergabe.Branchenführende Features für Langlebigkeit wie
          Ceramic Shield und Wasserschutz
        </Typography>

        <div className=" flex items-center gap-2">
          <Typography
            variant="h6"
            className="font-medium text-stroke-2 text-deep-orange-200 line-through"
          >
            $ 75.00
          </Typography>
          <Typography
            variant="h3"
            color="gray"
            className="text-black font-medium"
          >
            $ 72.00
          </Typography>
        </div>

        <div className="flex items-center m-0">
          <ButtonGroup className="my-4 gap-1" size="sm" variant="outlined">
            <Button className="rounded-full border-2 border-amber-200">
              128 GB
            </Button>
            <Button className="rounded-full border-2 border-gray-200 text-gray-600">
              256 GB
            </Button>
            <Button className="rounded-full border-2 border-gray-200  text-gray-600">
              512 GB
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex items-center gap-2 my-3">
          <Typography color="gray" className="my-2" variant="small">
            The iPhone 15 Pro has a robust and lightweight design made of space
            grade titanium with a textured matte glass back.
            <br />
            Customizable action button - The action button takes you directly to
            your favourite feature. Simply set mute mode, camera, voice memo,
            shortcut or other feature.
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <a href="#" className="inline-block">
            <Button
              size="sm"
              variant="text"
              className="flex items-center rounded-full gap-2 bg-yellow-600 hover:bg-amber-600"
            >
              <NavLink to="/basket">
                <ShoppingBagIcon className="h-4 w-4" />
                Add to cart
              </NavLink>
            </Button>
          </a>
          <a href="#" className="inline-block">
            <Button
              size="sm"
              variant="text"
              className="flex items-center rounded-full gap-2 bg-amber-500 hover:bg-amber-600"
            >
              <ShoppingCartIcon className="h-4 w-4" />
              Buy Now
            </Button>
          </a>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductDetail;
