import React, { useContext, useState } from 'react'
import BellIcon from '../../assets/imgs/bell.svg'
import FriendsIcon from '../../assets/imgs/friends.svg'
import Logo from '../../assets/imgs/Logo.svg'
import Button from '../Common/Button'
import IconButton from '../Common/IconButton'
import DropDownAvatar from '../Toggles/DropDownAvatar'
import Gallery from '../Gallery/Gallery'

export default function NavBar() {
  const toRender = (
    <div className="absolute flex justify-end z-10 w-screen">
      {/* Project logo  */}
      {/* <div className="flex items-center gap-3 py-6 ml-10 theme-font text-xl">
        <a href="/">
          <img src={Logo} alt="" className="w-12 h-12" />
        </a>
        <a href="/" className="text-white">
          Azuer
        </a>
      </div> */}

      {/* Nav Buttons  */}
      <NavBarUserButtons />
    </div>
  )

  return toRender
}

function NavBarUserButtons() {
  const [rightSlideNotification, setRightSlideNotification] = useState(false)
  const [galleryShow, setGalleryShow] = useState(false)

  // If logged in, render the user Avatar, and show the drop down on click
  const toRender = (
    <div className="flex flex-col theme-font">
      <div className="flex mr-10 gap-3 py-6 ml-10 space-x-3">
        {/* Notification Icon */}
        {/* <IconButton icon={BellIcon} onClick={() => setNotificationShown(!notificationShown)} /> */}
        <IconButton icon={BellIcon} onClick={() => setRightSlideNotification(!rightSlideNotification)} />

        {/* Friends Icon */}
        {/* <IconButton icon={FriendsIcon} onClick={() => console.log('Friends button clicked!')} /> */}

        {/* User icon */}
        <DropDownAvatar galleryShow={galleryShow} setGalleryShow={setGalleryShow} />

        {/* Gallery */}
        <Gallery galleryShow={galleryShow} setGalleryShow={setGalleryShow} />
      </div>
    </div>
  )

  return toRender
}
