/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react'
import Tab from './Tab'
import Segment from './Segment'
import SearchBar from './SearchBar'
// import { NavLink } from 'react-router-dom'

export default function Summary({ lectureID }) {
  const [data, setData] = useState([])
  const [searchResult, setSearchResult] = useState([])
  async function fetchSummaries() {
    const response = await fetch(`http://127.0.0.1:5000/summary?video_idx=${lectureID}`)
    // const response = await fetch('http://127.0.0.1:5000/summary?video_idx=11692_1')
    if (!response.ok) {
      setData(null)
    }
    const result = await response.json()
    setData(result)
  }

  useEffect(() => {
    console.log(222)
    fetchSummaries()
  }, [lectureID])

  return (
    <div>
      {/* Tab and search bar */}
      <div className="flex items-center gap-8">
        <Tab />
        <SearchBar setSearchResult={setSearchResult} />
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
        {data != null &&
          data.map((el, id) =>
            /* prettier-ignore */
            <Segment ID={id} highlight={searchResult} start={el.start_timestamp} end="10:20" summaryBrief={el.summary_brief} summaryDetail={el.summary_detailed} />
          )}
      </div>
    </div>
  )
}
