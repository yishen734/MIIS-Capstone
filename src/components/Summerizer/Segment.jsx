/* eslint-disable no-constant-condition */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react'
import { BsPlayCircleFill } from 'react-icons/bs'
import { MainPageContext } from '../../pages/PageMain/PageMain'
import PlayButton from './PlayButton'

export default function Segment({ ID, highlight, start, end }) {
  const highlights = ['', 'highlight1', 'highlight2', 'highlight3']
  const highlightDegree = 0 ? { highlight } === null : highlights[highlight]
  const { setPlayerCurPosition } = React.useContext(MainPageContext)

  const convertToSeconds = (time) => {
    const times = time.split(':')
    let seconds
    if (times.length === 2) {
      seconds = parseInt(times[0], 10) * 60 + parseInt(times[1], 10)
    } else {
      seconds = parseInt(times[0], 10) * 3600 + parseInt(times[1], 10) * 60 + parseInt(times[2], 10)
    }
    return seconds
  }

  const seekTo = () => {
    const seconds = convertToSeconds(start)
    setPlayerCurPosition(seconds)
  }

  return (
    <div className="font-medium">
      <div className="flex items-center text-xl gap-16">
        <p className="font-bold">SEGMENT {ID}</p>
        <div>
          {start} ~ {end}
        </div>
        {/* <BsPlayCircleFill className="w-6 h-6" onClick={seekTo} /> */}
        <PlayButton onClick={seekTo} />
      </div>

      <div className="flex max-w-3xl text-lg mt-2 -ml-2">
        <p className={`px-2 py-1 ${highlightDegree}`}>
          Summary summary summary summary summary summary summary summary summary summary summary summary
          summary summary summary summary summary summary summary summary summary summary summary summary
        </p>
      </div>
    </div>
  )
}
