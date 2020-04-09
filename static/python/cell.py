class Cell:
    def __init__(self, index):
        self.set_to_default()
        self.index = index

    def set_to_default(self):
        self.character = ' '

    def reset(self, to='zero'):
        if to == 'space':
            self.print_character(' ')
        else:
            self.set_to_default()

    def print_character(self, letter, rotate=True):
        self.character = letter
