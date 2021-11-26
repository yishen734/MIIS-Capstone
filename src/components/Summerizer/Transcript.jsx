/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Highlighter from 'react-highlight-words'
import Tab from './Tab'

export default function Trancript({ lectureID }) {
  const [data, setData] = useState([])

  async function fetchTranscript() {
    const response = await fetch(`http://127.0.0.1:5000/transcript?video_idx=${lectureID}`)
    const result = await response.json()
    setData(result)
  }

  useEffect(() => {
    fetchTranscript()
  }, [])

  return (
    <div>
      <Tab />

      <div className="flex flex-col justify-between gap-10 max-w-3xl mt-10 font-medium text-lg">
        {data.map((el, id) =>
          /* prettier-ignore */
          <p>{el.transcript_corrected}</p>
        )}
      </div>
    </div>
  )
}
