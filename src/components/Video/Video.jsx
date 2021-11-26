/* eslint-disable import/no-cycle */
import React from 'react'
import Upload from '../Intro/Upload'
import Player from './Player'
import { SplitPaneContext } from '../Common/SplitPaneProvider'
import { MainPageContext } from '../../pages/PageMain/PageMain'

export default function Video() {
  const rightRef = React.createRef()
  const [showUpload, setShowUpload] = React.useState(true)
  const [showPlayer, setShowPlayer] = React.useState(false)
  const { rightWidth, setRightWidth } = React.useContext(SplitPaneContext)
  const { setShowDescription, setShowSummary, setShowTranscript } = React.useContext(MainPageContext)

  React.useEffect(() => {
    if (rightWidth == null) {
      setRightWidth(rightRef.current.clientWidth)
      rightRef.current.style.flex = 'none'
    }
    rightRef.current.style.width = `${rightWidth}px`
  }, [rightWidth])

  const getStarted = () => {
    // Left
    setShowDescription(false)
    setShowSummary(true)
    setShowTranscript(false)

    // Right
    setShowUpload(false)
    setShowPlayer(true)
  }

  return (
    <div
      ref={rightRef}
      className="bg-gray-dark flex flex-col justify-center items-center font-jura text-white w-full"
    >
      {showUpload && <Upload getStarted={getStarted} />}
      {showPlayer && <Player />}
    </div>
  )
}
