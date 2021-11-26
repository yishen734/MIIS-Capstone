/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition, Popover } from '@headlessui/react'
import { ArrowSmLeftIcon } from '@heroicons/react/outline'
import { React, Fragment, useEffect, useState } from 'react'
import { APIGetFeeds } from '../../apis/feed'
import VideoCard from './VideoCard'

export default function Gallery({ galleryShow, setGalleryShow, lectureID, setLectureID }) {
  const [feeds, setFeeds] = useState([])

  const closeAll = () => {
    setGalleryShow(false)
  }

  // Read fake data
  const getFeedsFailed = (res) => {
    console.log('Failed to get notifications from the server.')
    console.log(res)
  }

  const getFeedsSuccess = (res) => {
    console.log('Pushing notifications to the state array')
    console.log(res)
    setFeeds((oldArray) => [...oldArray, ...res.data])
  }

  const getFeeds = () => {
    console.log('Retrieving feeds...')
    APIGetFeeds(getFeedsSuccess, getFeedsFailed)
  }

  return (
    <Transition.Root show={galleryShow} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-20" onClose={closeAll}>
        <div className="absolute inset-0 ">
          <Dialog.Overlay className="absolute bg-black opacity-50 inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex theme-font">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div id="feed-scroll" className="w-screen max-w-2xl overflow-y-scroll">
                <div className="flex flex-col bg-white shadow-xl ">
                  {/* Close button */}
                  <div className="flex pl-2 py-6">
                    <div className="h-7 flex items-center">
                      <button
                        type="button"
                        className="bg-white rounded-md text-gray-400 hover:text-gray-500"
                        onClick={() => setGalleryShow(false)}
                      >
                        <ArrowSmLeftIcon className="w-8 h-8" aria-hidden="true" />
                      </button>
                    </div>
                    <span className="text-xl font-semibold"> My Gallery </span>
                  </div>

                  <div className="mt-6 flex-1">
                    <VideoCard lecture="11692_1" lectureID={lectureID} setLectureID={setLectureID} />
                    <VideoCard lecture="lecture2" lectureID={lectureID} setLectureID={setLectureID} />
                    <VideoCard lecture="lecture3" lectureID={lectureID} setLectureID={setLectureID} />
                    <VideoCard lecture="lecture4" lectureID={lectureID} setLectureID={setLectureID} />
                    <VideoCard lecture="lecture5" lectureID={lectureID} setLectureID={setLectureID} />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
