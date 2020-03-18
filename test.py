class Human:
    def __init__(self, name, job, language):
        self.name = name
        self.job = job
        self.programming_language = ''
  
me = Human()
me.name = 'Ryota Shimajiri'
me.job = 'Engineer'
me.language = ['Python', 'Java', 'JavaScript', 'Perl', 'PHP']

print(me.name)
print(me.programming_language)