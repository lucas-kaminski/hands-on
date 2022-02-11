'''
deque : lista de alta perfomance
'''

from collections import deque

deq = deque("Lucas")
print(deq)
print(type(deq))

deq.append("K")
print(deq)
deq.appendleft("K")
print(deq)

deq.pop()
print(deq)
deq.popleft()
print(deq)