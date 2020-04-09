const useAudio = file => {
  const audio = new Audio(file)

  const start = () => {
    audio.play()
  }

  console.log(audio)

  return { start }
}

export default useAudio
