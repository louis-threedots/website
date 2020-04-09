const useAudio = file => {
  const audio = new Audio(`${file}`)
  var playing = false
  const start = () => {
    if(playing == false){
    audio.play()
    playing = true;
    }else {
      audio.pause()
      audio.currentTime = 0;
      playing = false;
    }
    
    
  }

  console.log(audio)

  return { start }
}

export default useAudio
