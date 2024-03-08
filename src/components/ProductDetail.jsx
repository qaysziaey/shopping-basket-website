import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Input,
  Rating,
} from "@material-tailwind/react";
import { product } from "./products";
import { useState } from "react";

export default function ProductDetail() {
  const [rated, setRated] = useState(4);
  return (
    <Card className="w-full max-w-[60rem] flex-row h-[40rem]">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://m.media-amazon.com/images/I/512Wg9SvQsL._AC_SL1500_.jpg"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 ">
          Smart Phone
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Apple iPhone 14 (128 GB) - Polarstern
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Batterielaufzeit für den ganzen Tag und bis zu 20 Std.
          Videowiedergabe.Branchenführende Features für Langlebigkeit wie
          Ceramic Shield und Wasserschutz
        </Typography>
        <div className="flex items-center gap-2 font-bold text-blue-gray-500">
          4.5
          <Rating value={4} onChange={(value) => setRated(value)} />
        </div>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
