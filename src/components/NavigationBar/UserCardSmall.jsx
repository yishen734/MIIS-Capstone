import PlaceholderUserIcon from '../../assets/imgs/potato.jpg'

export default function UserCardSmall() {
  const toRender = (
    <div className="flex items-center">
      <img src={PlaceholderUserIcon} alt="" className="w-14 h-14 rounded-md" />
      <div className="ml-5 flex flex-col justify-center font-poppins leading-4">
        <div className="flex items-center gap-2">
          <b className="text-lg font-semibold">Hello World</b>
          <span className="bg-green-100 rounded-lg px-1.5 py-0.5 text-green-400 font-medium text-normal">
            Pro
          </span>
        </div>
        <span className="font-medium text-gray-400">potato@gmail.com</span>
      </div>
    </div>
  )

  return toRender
}
