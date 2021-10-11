/* eslint-disable import/no-cycle */
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { MainPageContext } from '../../pages/PageMain/PageMain'

export default function Player() {
  const player = React.useRef()
  const [playing, setPlaying] = React.useState(true)
  // const [seeking, setSeeking] = React.useState(false)
  // const [duration, setDuration] = React.useState(0)
  // const [played, setPlayed] = React.useState(0)
  const { playerCurPosition, setPlayerCurPosition } = React.useContext(MainPageContext)

  React.useEffect(() => {
    console.log(playerCurPosition)
    player.current.seekTo(parseFloat(playerCurPosition))
  }, [playerCurPosition])

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div style={{ width: '80%', height: '600px' }}>
        <ReactPlayer
          ref={player}
          controls
          playing={playing}
          width="100%"
          height="100%"
          onSeek={(e) => console.log('onSeek', e)}
          onPause={(e) => console.log('onPause', e)}
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </div>
    </div>
  )
}
