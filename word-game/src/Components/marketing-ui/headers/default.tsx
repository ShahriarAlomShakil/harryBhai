import { Button, Navbar } from "flowbite-react";
import type { FC } from "react";
import DarkToggle from "../../dark";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header>
      <Navbar fluid className="bg-teal-200">
        <Navbar.Brand href="https://flowbite.com">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Wordy
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 lg:order-2">
          <DarkToggle />
          <Button
            color="gray"
            href="#"
            className="border-0 hover:bg-gray-50 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            About
          </Button>
          <Button
            color="gray"
            href="#"
            className="border-0 hover:bg-gray-50 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Contact
          </Button>
        </div>
      </Navbar>
    </header>
  );
};

export default DefaultHeaderNavigation;
