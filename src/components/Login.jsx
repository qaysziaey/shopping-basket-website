import styles from "../components/Login.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function Login() {
  const { user, login } = useContext(UserContext);
  const [localUserName, setLocalUserName] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card color="transparent" shadow={false}>
        <h1>{user ? `Welcome back ${user.userName}!` : "Please login"}</h1>
        <Typography variant="h4" color="blue-gray">
          Log in
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to login.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={(e) => {
            e.preventDefault();
            if (localUserName.trim()) {
              login(localUserName);
            } else {
              // Handle error or notify user
              console.log("Please enter a username");
            }
          }}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Username
            </Typography>
            <Input
              value={localUserName}
              onChange={(event) => setLocalUserName(event.target.value)}
              size="lg"
              placeholder="username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button
            type="submit"
            className="mt-6 bg-amber-700 shadow-none text-black hover:shadow-lg hover:shadow-amber-700/20"
            fullWidth
          >
            <NavLink to="/products">{user ? "Continue" : "Log in"}</NavLink>
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <NavLink to="#" className="font-medium text-gray-900">
              Sign up
            </NavLink>
          </Typography>
        </form>
      </Card>{" "}
    </div>
  );
}
