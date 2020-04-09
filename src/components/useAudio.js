const useAudio = file => {
  const audio = new Audio(`${file}`)
  let playing = false

  const start = () => {
    if (!playing) {
      audio.play()
      playing = true
    } else {
      audio.pause()
      audio.currentTime = 0
      playing = false
    }
  }

  return { start }
}

export default useAudio
