const useAudio = file => {
  const audio = new Audio(`/website${file}`)

  const start = () => {
    audio.play()
  }

  console.log(audio)

  return { start }
}

export default useAudio
