# Program that lists the first 20 square numbers
#for i in range(1, 21):
#    i = i * i
#    print(i)


#Updated version that asks for command line attribute and prints out a value, with defensive programming for errors such as type string, int or outside of bound.

squareNumbers = (input("Chose a number between 1 and 20: "))
if str.isdigit(squareNumbers):
    if int(squareNumbers) < 21 and int(squareNumbers) > 0:
        for squareNumbers in range(1, int(squareNumbers)+1):
            squareNumbers = squareNumbers * squareNumbers
            print(squareNumbers)
    else:
        print("You chose a number that is outside the range")
else:
   print("Nice try, but either you did not type a number or the number is not in the 1 to 20 range")
    
