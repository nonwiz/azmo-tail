/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  ViewGridIcon,
  XIcon,
  UserCircleIcon,
  MailIcon,
  NewspaperIcon,
  SparklesIcon,
  LockClosedIcon,
  MoonIcon,
  SunIcon,
  FilmIcon,
  GiftIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import localStorage from "localStorage";

const posts = [
  {
    name: "Blog",
    href: "/all-blog",
    icon: NewspaperIcon,
  },
  {
    name: "Vlog",
    href: "/all-vlog",
    icon: FilmIcon,
  },
  {
    name: "Storybook",
    href: "/all-storybook",
    icon: ViewGridIcon,
  },
  {
    name: "Collection",
    href: "/collection",
    icon: SparklesIcon,
  },
];
const callsToAction = [
  { name: "Email us", href: "mailto:angelaura9629@gmail.com", icon: MailIcon },
];
const more = [
  {
    name: "Who are we",
    description: "Find more about us.",
    href: "/about-us",
    icon: UserCircleIcon,
  },
  {
    name: "Privacy",
    description: "How we manage your data.",
    href: "/privacy",
    icon: LockClosedIcon,
  },
  {
    name: "Donate",
    description:
      "I would appreciate your donation, as it will be use for the further development of this blog.",
    href: "https://paypal.me/azlasorubou83?country.x=MY&locale.x=en_US",
    icon: GiftIcon,
  },
];
const recentType = [
  {
    id: 0,
    name: "Blog: Experiencing suicidal thought...",
    href: "/post/experiencing_suicidal_thought_10_31",
  },
  {
    id: 1,
    name: "Blog: Should we ignore depression?",
    href: "/post/should_we_ignore_depression_10_28",
  },
  {
    id: 2,
    name: "Blog: Why people dislike or gossip about you",
    href: "/post/why_people_gossip_about_you_10_24",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function isDarkMode() {
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
    <Popover className="relative font-sans bg-white dark:bg-wgray-600">
      <div className="px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start mx-1 lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex flex-row transform md:scale-110 lg:scale-125">
                <span className="sr-only">Azmo</span>
                <img
                  className="h-10 w-15 sm:h-10 transform scale-150 filter dark:invert"
                  src={`/assets/logo.png`}
                />
                <img
                  className="h-10 p-1 w-15 sm:h10 transform scale-150 translate-x-5 -translate-y-1"
                  src={`/assets/logo_text.png`}
                />
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-200">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link href="/">
              <a className="text-base font-medium text-gray-500  hover:text-gray-700 dark:text-gray-50 dark:hover:text-rose-200">
                <span>Home</span>
              </a>
            </Link>

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
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative px-5 py-6 bg-white grid gap-6 dark:bg-wgray-600 sm:gap-8 sm:p-8">
                          {posts.map((item) => (
                            <Link href={item.href} key={item.name}>
                              <a
                                key={item.name}
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-wgray-100 dark:hover:bg-wgray-400"
                              >
                                <item.icon
                                  className="flex-shrink-0 w-6 h-6 mt-2 text-wgray-400 dark:text-gray-50"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900 dark:text-cgray-50">
                                    {item.name}
                                  </p>
                                  {/* <p className="mt-1 text-sm text-gray-500 dark:text-cgray-50"> */}
                                  {/*   {item.description} */}
                                  {/* </p> */}
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-wgray-200 dark:bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <Link href={item.href}>
                                <a className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-wgray-200">
                                  <item.icon
                                    className="flex-shrink-0 w-6 h-6 text-gray-600"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

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
                    <span>About</span>
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
                    <Popover.Panel className="absolute z-10 w-screen max-w-md px-2 mt-3 left-1/2 transform -translate-x-1/2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8 dark:bg-wgray-600">
                          {more.map((item) => (
                            <Link href={item.href} key={item.name}>
                              <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-wgray-100 dark:hover:bg-wgray-400">
                                <item.icon
                                  className="flex-shrink-0 w-6 h-6 text-gray-400 dark:text-gray-50 mt-2"
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
                        <div className="px-5 py-5 bg-wgray-200 dark:bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm font-medium tracking-wide text-gray-600 uppercase text-left">
                              Recent
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentType.map((post) => (
                                <li
                                  key={post.id}
                                  className="text-base truncate"
                                >
                                  <Link href={post.href}>
                                    <a className="font-medium text-gray-500 hover:text-gray-700">
                                      {post.name}
                                    </a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <Link href="/all-posts">
                              <a className="font-medium text-gray-700 hover:text-gray-500">
                                View all posts
                                <span aria-hidden="true">&rarr;</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            {/* <a */}
            {/*   href="https://paypal.me/azlasorubou83?country.x=MY&locale.x=en_US" */}
            {/*   className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900 " */}
            {/*   target="_blank" */}
            {/* > */}
            {/*   <span className="dark:text-cgray-50">Gift</span> */}
            {/* </a> */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium border border-transparent whitespace-nowrap rounded-md shadow-sm text-cgray-500 bg-bgray-50 hover:bg-cgray-100"
              onClick={() => {
                switchMode();
                setDark(!dark);
              }}
            >
              {dark ? (
                <MoonIcon className="flex-shrink-0 w-6 h-6" />
              ) : (
                <SunIcon className="flex-shrink-0 w-6 h-6 " />
              )}
              <span className="mx-1 hover:text-black">
                {dark ? " Night " : " Light "}
              </span>
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
          className="absolute inset-x-0 top-0 z-20 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 dark:bg-wgray-600 ">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-row">
                  <img
                    className="h-10 w-15 sm:h-10 filter dark:invert"
                    src={`/assets/logo.png`}
                  />
                  <img
                    className="h-10 p-1 w-15 sm:h10 transform scale-150 translate-x-5 -translate-y-2"
                    src={`/assets/logo_text.png`}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-wgray-400 dark:text-cgray-50 hover:text-wgray-500 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-200">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {posts.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <a className="flex items-center p-3 -m-3 rounded-md hover:bg-bgray-300 dark:hover:bg-bgray-500">
                        <item.icon
                          className="flex-shrink-0 w-6 h-6 text-cgray-400 dark:text-rose-200"
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
            <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/all-posts"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  <span className="dark:text-cgray-100"> All Posts </span>
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
                  href="mailto:angelaura9629@gmail.com"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-wgray-400 hover:bg-wgray-500 dark:bg-rose-200 dark:hover:bg-rose-300 dark:text-wgray-600"
                >
                  Email
                </a>
                <p className="mt-6 text-base font-medium text-center text-gray-500">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 text-base font-medium whitespace-nowrap"
                    onClick={() => {
                      switchMode();
                      setDark(!dark);
                    }}
                  >
                    {dark ? (
                      <MoonIcon className="flex-shrink-0 w-6 h-6 dark:text-cgray-100" />
                    ) : (
                      <SunIcon className="flex-shrink-0 w-6 h-6 dark:text-cgray-100" />
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
