/* eslint-disable import/no-cycle */
import React from 'react'
import { SplitPaneContext } from '../Common/SplitPaneProvider'
import { MainPageContext } from '../../pages/PageMain/PageMain'
import Description from '../Intro/Description'
import Summary from './Summary'
import Transcript from './Transcript'

export default function Summerizer({ lectureID }) {
  console.log('lectureID', lectureID)
  const leftRef = React.createRef()
  const { leftWidth, setLeftWidth } = React.useContext(SplitPaneContext)
  const { showSummary, showDescription, showTranscript } = React.useContext(MainPageContext)

  React.useEffect(() => {
    if (leftWidth == null) {
      setLeftWidth(leftRef.current.clientWidth)
      leftRef.current.style.flex = 'none'
    }
    leftRef.current.style.width = `${leftWidth}px`
  }, [leftWidth])

  return (
    <div ref={leftRef} className="bg-gray-dark font-jura text-white overflow-y-scroll">
      <div>
        <div className="border-b-1/2">
          <p className="text-3xl font-bold ml-28 mt-6 mb-6">LECTURE SUMMERIZER</p>
        </div>
        <div className="ml-28 mt-12">
          {showDescription && <Description />}
          {showSummary && <Summary lectureID={lectureID} />}
          {showTranscript && <Transcript lectureID={lectureID} />}
        </div>
      </div>
    </div>
  )
}
