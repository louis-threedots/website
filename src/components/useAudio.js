const useAudio = file => {
  const audio = new Audio(`/website${file}`)
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
