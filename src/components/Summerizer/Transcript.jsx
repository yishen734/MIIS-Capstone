/* eslint-disable import/no-cycle */
import React from 'react'
import ReactDOM from 'react-dom'
import Highlighter from 'react-highlight-words'
import Tab from './Tab'

export default function Trancript() {
  return (
    <div>
      <Tab />
      <div className="flex flex-col justify-between gap-10 max-w-3xl mt-10 font-medium text-lg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat risus, fermentum risus, odio a
          consectetur ornare risus. Sed mattis sagittis dignissim in arcu sit dui. Enim, velit mattis ut
          neque. Pulvinar ut tellus, penatibus est. Libero, donec integer nec
        </p>

        <p>
          Aamet volutpat pharetra. Suspendisse mattis donec proin ornare facilisi nunc faucibus sed diam. Leo
          aliquam nunc, pulvinar sit suspendisse id in amet pretium. Etiam arcu volutpat rhoncus, urna proin
          pellentesque elit facilisis. Hendrerit tempor, quam
        </p>

        <p>
          ultricies nec lacus. Sed nulla aliquam sit proin in. Aliquet ornare id id nec neque enim duis.
          Massa, egestas bibendum euismod eget dictum scelerisque suspendisse adipiscing nisi. In dignissim
          imperdiet viverra cras leo duis sit. In lacinia cras ipsum
        </p>

        <p>
          sed. Turpis congue purus vulputate id tempor amet, ut ac rutrum. Tristique malesuada nulla sapien ac
          fringilla accumsan, facilisi morbi. Nulla egestas aliquam amet ac imperdiet nisl, feugiat lectus
          lorem. Quisque rhoncus egestas pulvinar eu. Ullamcorper malesuada tortor et iaculis massa cursus
          egestas laoreet elementum.
        </p>

        <p>
          Samet volutpat pharetra. Suspendisse mattis donec proin ornare facilisi nunc faucibus sed diam. Leo
          aliquam nunc, pulvinar sit suspendisse id in amet pretium. Etiam arcu volutpat rhoncus, urna proin
          pellentesque eli
        </p>

        <p>
          Turpis congue purus vulputate id tempor amet, ut ac rutrum. Tristique malesuada nulla sapien ac
          fringilla accumsan, facilisi morbi. Nulla egestas aliquam amet ac imperdiet nisl, feugiat lectus
          lorem. Quisque rhoncus egestas pulvinar eu. Ullamcorper malesuada tortor et iaculis massa cursus
          egestas laoreet elementum.
        </p>
      </div>

      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={['and or', 'or', 'the']}
        autoEscape
        textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
      />
    </div>
  )
}
