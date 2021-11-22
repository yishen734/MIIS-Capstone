import { useState } from 'react'
import CommentIcon from '../../assets/imgs/comment.svg'
import LikeIcon from '../../assets/imgs/like.svg'
import PlaceholderUserIcon from '../../assets/imgs/Alan.jpg'
import SendIcon from '../../assets/imgs/send.svg'
import ShareIcon from '../../assets/imgs/share.svg'
import IconButton from '../Common/IconButton'

export default function VideoCard() {
  return (
    <div className="flex px-4 py-4 border-t-1/2 gap-3 theme-font">
      <IconButton
        myWidth="50px"
        myHeight="50px"
        icon={PlaceholderUserIcon}
        onClick={() => console.log('User icon clicked!')}
        fullImage
      />
      <div className="flex flex-col ">
        {/* User title and time */}
        <div className="flex items-center gap-5">
          <div className="flex gap-2">
            <span className="text-base font-semibold"> hello </span>
            <span className="bg-green-100 rounded-md px-1.5 py-0.5 text-green-400 font-medium text-sm">
              Pro
            </span>
          </div>
          <span className="text-sm font-normal text-gray-500">time</span>
        </div>

        {/* Content */}
        <div className="text-sm mt-3 text-gray-900"> testing </div>

        <div className="flex items-center gap-20 mt-2 text-gray-600 -ml-1">
          {/* Comments */}
          <button className="group flex items-center gap-3 cursor-pointer">
            <img
              src={CommentIcon}
              alt="icon"
              className="w-9 h-9 px-2 rounded-2xl group-hover:bg-indigo-200"
            />
            <span className="group-hover:text-indigo-600">{3}</span>
          </button>

          {/* Shares */}
          <div className="group flex items-center gap-3 cursor-pointer">
            <img src={ShareIcon} alt="icon" className="w-9 h-9 px-2 rounded-2xl group-hover:bg-green-100" />
            <span className="group-hover:text-green-600">{2}</span>
          </div>

          {/* Likes */}
          <div className="group flex items-center gap-3 cursor-pointer">
            <img src={LikeIcon} alt="icon" className="w-9 h-9 px-2 rounded-2xl group-hover:bg-blue-200" />
            <span className="group-hover:text-blue-600">{1}</span>
          </div>

          {/* Send */}
          <div className="group flex items-center gap-3 cursor-pointer">
            <img src={SendIcon} alt="icon" className="w-9 h-9 px-2 rounded-2xl group-hover:bg-yellow-100" />
          </div>
        </div>
      </div>
    </div>
  )
}
