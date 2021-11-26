/* eslint-disable import/no-cycle */
import React from 'react'
import { SplitPaneProvider } from '../../components/Common/SplitPaneProvider'
import Summerizer from '../../components/Summerizer/Summerizer'
import Video from '../../components/Video/Video'
import NavBar from '../../components/NavigationBar/NavBar'

export const MainPageContext = React.createContext()
export default function PageMain() {
  const [lectureID, setLectureID] = React.useState(null)
  const [showDescription, setShowDescription] = React.useState(true)
  const [showSummary, setShowSummary] = React.useState(false)
  const [showTranscript, setShowTranscript] = React.useState(false)
  const [playerCurPosition, setPlayerCurPosition] = React.useState(0)

  return (
    <div>
      <MainPageContext.Provider
        value={{
          lectureID,
          setLectureID,
          showDescription,
          setShowDescription,
          showSummary,
          setShowSummary,
          showTranscript,
          setShowTranscript,
          playerCurPosition,
          setPlayerCurPosition,
        }}
      >
        <NavBar />
        <SplitPaneProvider>
          <Summerizer lectureID={lectureID} />
          <Video lectureID={lectureID} />
        </SplitPaneProvider>
      </MainPageContext.Provider>
    </div>
  )
}
