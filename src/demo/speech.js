import React from "react"
import { useSpeechSynthesis } from "react-speech-kit"

const Speech = () => {
  const { speak, voices } = useSpeechSynthesis()
  useEffect(() => {
    if (voices.length > 0) {
      const defaultVoice = voices.find(voice => voice.default) || voices[0]
      setVoice(defaultVoice)
    }
  }, [voices])

  return <div>Uau</div>
}

export default Speech
