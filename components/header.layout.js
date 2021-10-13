/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
  UserCircleIcon,
  MailIcon,
  DocumentIcon,
  NewspaperIcon,
  SparklesIcon,
  ScaleIcon,
  LockClosedIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import localStorage from "localStorage";

const posts = [
  {
    name: "Blogs",
    description: "Lifestyle, Traveling, Experience, Tips and Tricks",
    href: "/blogs",
    icon: NewspaperIcon,
  },
  {
    name: "Collection",
    description: "Drawing, Painting, Designing, Photography",
    href: "/collection",
    icon: SparklesIcon,
  },
  {
    name: "Experiment",
    description: "Coming soon",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Storybook",
    description: "Coming soon",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Research",
    description: "Coming soon",
    href: "#",
    icon: DocumentIcon,
  },
];
const callsToAction = [{ name: "Join us", href: "#", icon: MailIcon }];
const more = [
  {
    name: "About Us",
    description:
      "Find more about us.",
    href: "/about-us",
    icon: UserCircleIcon,
  },
  {
    name: "Privacy",
    description:
      "How we manage your data.",
    href: "/privacy",
    icon: LockClosedIcon,
  },
  {
    name: "Legal",
    description:
      "More detail one terms and services",
    href: "#",
    icon: ScaleIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Blog: Momo my best friend", href: "#" },
  { id: 2, name: "Vlog: Dorm Room Tour", href: "https://www.youtube.com/watch?v=dKwn0XIFyow" },
  { id: 3, name: "Collection: Journal 2022", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function isDarkMode() {
  console.log("test");
  if (localStorage.hasOwnProperty("counter")) {
    return Number(localStorage.getItem("counter")) % 2 == 0 ? true : false;
  } else {
    localStorage.setItem("counter", 0);
    return false;
  }
}

function switchMode() {
  let counter = Number(localStorage.getItem("counter"));
  localStorage.setItem("counter", counter + 1);
}

export default function HeaderLayout() {
  const [dark, setDark] = useState(isDarkMode());

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      return root.classList.add("dark");
    }
    root.classList.remove("dark");
  }, [dark]);

  return (
    <Popover className="relative bg-white dark:bg-wgray-600 font-sans">
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 mx-1">
            <Link href="/">
              <a className="flex flex-row transform md:scale-110 lg:scale-125">
                <span className="sr-only">Azmo</span>
                <img
                  className="h-10 w-15 sm:h-10 transform scale-150 filter dark:invert"
                  src={`/assets/logo.png`}
                />
                <img
                  className="h-10 w-15 sm:h10 transform scale-150 translate-x-5 translate-y-2 p-1"
                  src={`/assets/logo_text.png`}
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="text-gray-400 dark:text-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-200">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open
                        ? "text-gray-700 dark:text-rose-200"
                        : "text-gray-500 dark:text-gray-50",
                      "group rounded-md inline-flex items-center text-base px-1 font-medium text-gray-500 hover:text-gray-700 dark:hover:text-rose-200 focus:outline-none focus:ring-2 focus:ring-wgray-400 dark:focus:ring-rose-200"
                    )}
                  >
                    <span>Posts</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white dark:bg-wgray-600 px-5 py-6 sm:gap-8 sm:p-8">
                          {posts.map((item) => (
                            <Link href={item.href} key={item.name}>
                            <a
                              key={item.name}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-wgray-100 dark:hover:bg-wgray-400"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-wgray-400 dark:text-gray-50"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900 dark:text-cgray-50">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500 dark:text-cgray-50">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-wgray-200"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-gray-600"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="#"
              className="text-base py-1 font-medium text-gray-500 hover:text-gray-700 dark:text-gray-50 dark:hover:text-rose-200"
            >
              <span className="">Vlogs</span>
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open
                        ? "text-gray-700 dark:text-rose-200"
                        : "text-gray-500 dark:text-gray-50",
                      "group rounded-md inline-flex items-center text-base px-1 font-medium hover:text-gray-700 dark:hover:text-rose-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-rose-200"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 dark:bg-wgray-600">
                          {more.map((item) => (
                            <Link href={item.href} key={item.name}>
                            <a
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-wgray-100 dark:hover:bg-wgray-400"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-50"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900 dark:text-cgray-50">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500 dark:text-cgray-50">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium uppercase text-gray-600">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="text-base truncate"
                                >
                                  <Link href={post.href}>
                                  <a
                                    className="font-medium text-gray-500 hover:text-gray-700"
                                  >
                                    {post.name}
                                  </a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="#"
                              className="font-medium hover:text-gray-500 text-gray-700"
                            >
                              {" "}
                              View all posts{" "}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 "
            >
              <span className="dark:text-cgray-50">Email</span>
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-cgray-500 bg-bgray-50 hover:bg-cgray-100 hover:text-black"
              onClick={() => {
                switchMode();
                setDark(!dark);
              }}
            >
              {dark ? (
                <MoonIcon className="flex-shrink-0 h-6 w-6" />
              ) : (
                <SunIcon className="flex-shrink-0 h-6 w-6 " />
              )}
              <span className="mx-1 ">{dark ? " Night " : " Light "}</span>
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 dark:bg-wgray-600 ">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-row">
                  <img
                    className="h-10 w-15 sm:h-10 filter dark:invert"
                    src={`/assets/logo.png`}
                  />
                  <img
                    className="h-10 w-15 sm:h10 transform scale-150 translate-x-5 p-1"
                    src={`/assets/logo_text.png`}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-wgray-400 dark:text-cgray-50 hover:text-wgray-500 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-200">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {posts.map((item) => (
                    <Link href={item.href} key={item.name}>
                    <a
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-bgray-300 dark:hover:bg-bgray-500"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-cgray-400 dark:text-rose-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900 dark:text-cgray-50">
                        {item.name}
                      </span>
                    </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  <span className="dark:text-cgray-100"> Vlogs </span>
                </a>

                {more.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700 "
                  >
                    <span className="dark:text-cgray-50"> {item.name} </span>
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-wgray-400 hover:bg-wgray-500 dark:bg-rose-200 dark:hover:bg-rose-300 dark:text-wgray-600"
                >
                  Email
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  <a
                    href="#"
                    className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-base font-medium"
                    onClick={() => {
                      switchMode();
                      setDark(!dark);
                    }}
                  >
                    {dark ? (
                      <MoonIcon className="flex-shrink-0 h-6 w-6 dark:text-cgray-100" />
                    ) : (
                      <SunIcon className="flex-shrink-0 h-6 w-6 dark:text-cgray-100" />
                    )}
                    <span className="mx-1 dark:text-cgray-100">
                      {dark ? " Night " : " Light "}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
