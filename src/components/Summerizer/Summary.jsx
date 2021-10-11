/* eslint-disable import/no-cycle */
import React from 'react'
import Tab from './Tab'
import Segment from './Segment'
import SearchBar from './SearchBar'

export default function Summary() {
  return (
    <div>
      {/* Tab and search bar */}
      <div className="flex items-center gap-8">
        <Tab />
        <SearchBar />
      </div>

      {/* Relevant degree intro */}
      <div className="flex text-md mt-16 gap-8">
        <div className="flex gap-2 items-center">
          <div className="bg-yellow-500 w-5 h-5 rounded shadow" />
          Very Relevant
        </div>

        <div className="flex gap-2 items-center">
          <div className="bg-blue-500 w-5 h-5 rounded shadow" />
          Relevant
        </div>

        <div className="flex gap-2 items-center">
          <div className="bg-green-500 w-5 h-5 rounded shadow" />
          Somewhat Relevant
        </div>
      </div>

      {/* Segments */}
      <div className="flex flex-col justify-between gap-12 mt-5 mb-20">
        <Segment ID="0" highlight={1} start="01:30" end="10:20" />
        <Segment ID="1" highlight={2} start="21:21" end="24:50" />
        <Segment ID="2" highlight={3} start="32:36" end="39:42" />
        <Segment ID="3" start="46:32" end="49:48" />
        <Segment ID="4" start="51:36" end="59:42" />
        <Segment ID="6" start="01:01:20" end="01:08:20" />
        <Segment ID="7" start="01:09:20" end="01:20:42" />
        <Segment ID="8" start="01:13:35" end="01:26:57" />
      </div>
    </div>
  )
}
