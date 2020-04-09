num_cells = 3

def sendMessage(text=None, braille=None):
  return { "text": text, "braille": braille }

def newMessage(message):
  print(message)
  global num_cells
  return sendMessage(text="Hello, bac!k!", braille="⠇⠳⠊⠎")
