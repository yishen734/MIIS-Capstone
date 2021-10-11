/* eslint-disable import/no-cycle */
import React from 'react'
import { MainPageContext } from '../../pages/PageMain/PageMain'

export default function Tab() {
  const { setShowSummary, setShowTranscript } = React.useContext(MainPageContext)

  const switchToSummary = () => {
    setShowSummary(true)
    setShowTranscript(false)
  }

  const switchToTranscript = () => {
    setShowSummary(false)
    setShowTranscript(true)
  }

  return (
    <div className="flex gap-4">
      {/* Button: SUMMERY */}
      <button
        className="transition-colors duration-100 transform text-xl font-medium w-36 h-12 
                 bg-indigo-600 rounded-md hover:bg-indigo-500 text-white"
        onClick={() => switchToSummary()}
      >
        SUMMERY
      </button>

      {/* Button: TRANSCRIPT */}
      <button
        className="transition-colors duration-100 transform text-xl font-medium w-36 h-12 
                 bg-yellow-600 rounded-md hover:bg-yellow-500 text-white"
        onClick={() => switchToTranscript()}
      >
        TRANSCRIPT
      </button>
    </div>
  )
}
