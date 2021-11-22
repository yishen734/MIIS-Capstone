export default function IconButton({ icon, onClick, fullImage, myWidth, myHeight }) {
  const myStyle = {
    width: myWidth,
    height: myHeight,
    borderRadius: '50%',
  }

  // The icon to be rendered
  const iconDOM = fullImage ? (
    <img src={icon} alt="icon" style={{ borderRadius: '50%' }} />
  ) : (
    <img src={icon} alt="icon" style={{ width: '20px', height: '20px' }} />
  )
  return (
    <div>
      {onClick != null ? (
        // If onClick event is not given, render the icon as a clickable button
        <button
          className="flex flex-row bg-indigo-600 justify-around items-center"
          style={myStyle}
          onClick={() => onClick()}
        >
          {iconDOM}
        </button>
      ) : (
        // Otherwise, make it a div
        <div className="flex flex-row bg-indigo-600 justify-around items-center" style={myStyle}>
          {iconDOM}
        </div>
      )}
    </div>
  )
}

IconButton.defaultProps = {
  myWidth: '40px',
  myHeight: '40px',
  onclick: null,
}
