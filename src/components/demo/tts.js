import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react"
import { useSpeechSynthesis } from "react-speech-kit"

const TTS = forwardRef(({ text }, ref) => {
  const { speak, voices } = useSpeechSynthesis()
  const [voice, setVoice] = useState()

  useImperativeHandle(ref, () => ({
    speak: content => {
      speak({ text: content, voice })
    },
  }))

  useEffect(() => {
    if (voices.length > 0) {
      const defaultVoice = voices.find(voice => voice.default) || voices[0]
      setVoice(defaultVoice)
    }
  }, [voices])

  return (
    <div>
      <label
        htmlFor="voice"
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        Voice
      </label>
      <select
        id="voice"
        className="mt-1 block form-select w-full py-2 px-3 py-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        onChange={event =>
          setVoice(voices.find(voice => voice.voiceURI === event.target.value))
        }
      >
        {Array.isArray(voices) &&
          voices
            .filter(voice => voice.lang.startsWith("en-"))
            .map(voice => (
              <option key={voice.voiceURI} value={voice.voiceURI}>
                {voice.name} ({voice.lang})
              </option>
            ))}
      </select>
    </div>
  )
})

export default TTS
