# def print_name():
#     print("Allison")


# def print_favorite_movie():
#     print("(I don't have a favorite movie)")


# print_favorite_movie()

# num = 10

# def set_num():
# 	num = 5
# 	letter = "a"
# 	print(num)
# 	print(letter)


# set_num()
# print(num)

# def two_plus_two():
# 	val = 2 + 2
# 	return val

# print(two_plus_two() * 2)


# def add_two(num):
# 	print(num)
# 	val = num + 2
# 	return val

# add_two(5)


# def add_two_nums(num1, num2):
# 	val = num1 + num2
# 	return val

# print(add_two_nums(5, 10))


# def multiply_two_nums(num1, num2):
# 	val = num1 * num2
# 	return val

# print(multiply_two_nums(6, "umbrella"))

# def my_function(arg1, arg2, arg3, arg4):
#     print(arg1)
#     print(arg2)
#     print(arg3)
#     print(arg4)


# my_function("Hello", "I", "love", "python")

def my_function(*args):
	for val in args:
		print(val)


my_function("Hello", "I", "love", "python")
