/* eslint-disable import/no-cycle */
import React from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { MainPageContext } from '../../pages/PageMain/PageMain'
import CMU from '../../assets/imgs/CMU.png'

export default function Upload({ getStarted }) {
  //   const { setShowDescription, setShowSummary, setShowTranscript } = React.useContext(MainPageContext)
  //   const hideDescription = () => {
  //     setShowDescription(false)
  //     setShowSummary(true)
  //     setShowTranscript(false)
  //   }

  return (
    <div className="flex flex-col items-center w-full">
      {/* Upload icon */}
      <FaCloudUploadAlt className="w-40 h-40 text-white" />

      {/* Text: Select your video here */}
      <p className="text-2xl mt-12 font-medium">Select your lecture video here</p>

      <div>
        {/* Button: SELECT */}
        <button
          className="transition-colors duration-100 transform px-4 py-2 mx-0.5 mt-12 text-xl font-medium w-36 h-12 
                     bg-indigo-600 rounded-md hover:bg-indigo-500 text-white"
        >
          SELECT
        </button>

        {/* Button: DEMO */}
        <button
          className="transition-colors duration-100 transform px-4 py-2 mx-0.5 mt-12 text-xl font-medium w-36 h-12 
                     bg-green-600 rounded-md hover:bg-green-500 text-white"
          onClick={() => getStarted()}
        >
          DEMO
        </button>
      </div>

      {/* Description */}
      <p className="mt-32 font-medium text-lg">
        This is capstone project developed by the team "MIIS Big Four" from CMU SCS LTI
      </p>
      <p className="mt-5 font-medium text-lg">Developer: Pierre, Eason, Zhihao Wang, Jingrong Feng</p>

      {/* CMU logo */}
      <img className="w-28 h-28 mt-10" src={CMU} alt="" />
    </div>
  )
}
