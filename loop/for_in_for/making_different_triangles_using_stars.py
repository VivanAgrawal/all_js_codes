#printing reverse triangle
for i in range( 5 ,0,-1):
    for j in range(i):
        print("*", end=" ")
    print()

#printing right triangle
for i in range(1, 6):
    for j in range(i):
        print("*", end=" ")
    print()


#printing a equilateral triangle,method1
for i in range(1, 6):
    print(" " * (5 - i), end="")  
    for j in range(i):
        print("*", end=" ")
    print()

#printing a equilateral triangle,method2
rows = 5
for i in range(1, rows + 1):
    print(" " * (rows - i), end="") # Spaces
    print("* " * i) # Stars



#printing a diamond
rows = 5
for i in range(1, rows + 1):
    print(" " * (rows - i), end="")  # Spaces
    print("* " * i)  # Stars

for i in range(rows - 1, 0, -1):
    print(" " * (rows - i), end="")  # Spaces
    print("* " * i)  # Stars

