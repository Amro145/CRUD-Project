import { ColorModeButton, useColorModeValue } from "../ui/color-mode";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbg = useColorModeValue("gray.100", "gray.800");
  const navcolor = useColorModeValue("gray.900", "gray.100");

  return (
    <>
      <Box
        className="nav flex justify-between items-center w-ful "
        bg={navbg}
        color={navcolor}
        paddingY={2}
        paddingX={1}
      >
        <div className="flex justify-between items-center">
          <Link to="/" className="md:block hidden">
            <button
              className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
              type="button"
            >
              <div className="bg-white rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="25px"
                  width="25px"
                >
                  <path
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    fill="#000000"
                  ></path>
                  <path
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    fill="#000000"
                  ></path>
                </svg>
              </div>
              <p className="translate-x-2">Go Back</p>
            </button>
          </Link>
          <div className="logo text-center">
            <Link to="/">
              <h1>SHOOPING</h1>
            </Link>
          </div>
        </div>

        <div className="buttons">
          <Button variant="outline">
            <Link to="/create">
              <button
                title="Add New"
                className="group  cursor-pointer outline-none hover:rotate-90 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  height="100px"
                  viewBox="0 0 24 24"
                  className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    strokeWidth="1.5"
                  ></path>
                  <path d="M8 12H16" strokeWidth="3"></path>
                  <path d="M12 16V8" strokeWidth="3"></path>
                </svg>
              </button>
            </Link>
          </Button>

          <ColorModeButton />
        </div>
      </Box>
    </>
  );
}

export default Navbar;
