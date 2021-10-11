/* eslint-disable import/no-cycle */
import React from 'react'
import { SplitPaneProvider } from '../../components/Common/SplitPaneProvider'
import Summerizer from '../../components/Summerizer/Summerizer'
import Video from '../../components/Video/Video'

export const MainPageContext = React.createContext()
export default function PageMain() {
  const [showDescription, setShowDescription] = React.useState(true)
  const [showSummary, setShowSummary] = React.useState(false)
  const [showTranscript, setShowTranscript] = React.useState(false)
  const [playerCurPosition, setPlayerCurPosition] = React.useState(0)

  return (
    <div>
      <MainPageContext.Provider
        value={{
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
        <SplitPaneProvider>
          <Summerizer />
          <Video />
        </SplitPaneProvider>
      </MainPageContext.Provider>
    </div>
  )
}
