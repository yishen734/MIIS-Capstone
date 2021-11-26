/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import PlaceholderUserIcon from '../../assets/imgs/potato.jpg'
import UnitedStatesFlag from '../../assets/imgs/united-states.png'
import IconButton from '../Common/IconButton'
import ToggleButton from '../Common/ToggleButton'
import UserCardSmall from '../NavigationBar/UserCardSmall'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDownAvatar({ galleryShow, setGalleryShow }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {/* Avatar */}
      <div>
        <Menu.Button className="inline-flex justify-center rounded-full shadow-sm font-medium text-gray-700">
          <IconButton myWidth="40px" myHeight="40px" icon={PlaceholderUserIcon} fullImage />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="origin-top-right absolute right-7 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
          style={{ width: '315px', height: '400px' }}
        >
          {/* Avatar, Name, Email */}
          <div className="px-5 pt-8 pb-5">
            <UserCardSmall />
          </div>

          <div className="px-2 py-2">
            {/* Gallery */}
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 hover:text-indigo-600' : 'text-gray-700',
                    'block px-4 py-2 text-base font-medium'
                  )}
                  onClick={() => setGalleryShow(!galleryShow)}
                >
                  My Gallery
                </a>
              )}
            </Menu.Item>

            {/* Settings */}
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 hover:text-indigo-600' : 'text-gray-700',
                    'block px-4 py-2 text-base font-medium'
                  )}
                >
                  My Settings
                </a>
              )}
            </Menu.Item>
          </div>

          <div className="px-2 py-2">
            {/* Languages */}
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 hover:text-indigo-600' : 'text-gray-700',
                    'block px-4 py-2 text-base font-medium'
                  )}
                >
                  <div className="flex items-center gap-5">
                    Languages
                    <span className="flex items-center text-sm font-medium text-gray-700 bg-gray-200 rounded gap-2 px-3 py-1">
                      English
                      <img src={UnitedStatesFlag} alt="" className="w-5 h-5 rounded-md" />
                    </span>
                  </div>
                </a>
              )}
            </Menu.Item>

            {/* Sign out */}
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? 'bg-gray-100 hover:text-indigo-600' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-base font-medium'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>

          <div className="px-2 py-2">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 hover:text-indigo-600' : 'text-gray-700',
                    'block px-4 py-2 text-base font-medium'
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-gray-500 rounded text-base font-medium py-1">Dark Mode</div>
                    <ToggleButton />
                    <span className="bg-yellow-200 rounded-lg px-1.5 py-0.5 text-yellow-500 font-medium text-sm">
                      Test
                    </span>
                  </div>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
