/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import useWindowDimensions from './getWindowDimension'

const INIT_RATIO = 0.5
const LEFT_THRESHOLD = 0.35
const RIGHT_THRESHOLD = 0.65

export const SplitPaneContext = React.createContext()
export function SplitPaneProvider({ children }) {
  const { width, height } = useWindowDimensions()
  const [leftWidth, setLeftWidth] = React.useState(width * INIT_RATIO)
  const [rightWidth, setRightWidth] = React.useState(width * INIT_RATIO)
  const [showLeft, setShowLeft] = React.useState(true)
  const [showRight, setShowRight] = React.useState(true)
  const [dragging, setDragging] = React.useState(false)
  const splitPaneRef = React.createRef()

  const leftBoudary = LEFT_THRESHOLD * width
  const rightBoudary = RIGHT_THRESHOLD * width

  const onMouseDown = (e) => {
    setDragging(true)
  }

  const onMouseUp = () => {
    setDragging(false)
  }

  const onMouseMove = (e) => {
    if (dragging === false) {
      return
    }

    if (e.clientX >= leftBoudary && e.clientX <= rightBoudary) {
      setLeftWidth(e.clientX)
      setRightWidth(width - e.clientX)
    }
  }

  React.useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  })

  return (
    <div
      className={`flex w-screen h-screen overflow-hidden ${dragging ? 'select-none' : 'select-text'}`}
      ref={splitPaneRef}
    >
      <SplitPaneContext.Provider value={{ leftWidth, rightWidth, setLeftWidth, width }}>
        {/* Child one */}
        {showLeft && children[0]}

        {/* Dragging bar */}
        <div
          className="flex flex-col justify-center bg-gray-100 hover:bg-gray-200"
          style={{ cursor: 'row-resize', visibility: `${showRight ? 'visible' : 'hidden'}` }}
          onMouseDown={onMouseDown}
        >
          <BsThreeDotsVertical />
        </div>

        {/* Child two */}
        {showRight && children[1]}
      </SplitPaneContext.Provider>
    </div>
  )
}
