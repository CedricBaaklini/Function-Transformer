# This file acts as a prototype for the function transformer.
# Once this prototype is successful, it will be translated into typescript and interpreted via Node for unit testing
class Transformer:
    def __init__(self, a: float, b: float, c: float, d: float):
        self.a = a
        self.b = b
        self.c = c
        self.d = d


    # Dilation
    def v_dilation(self) -> str:
        if abs(self.a) > 1:
            growth = f"Stretched {abs(self.a)} times"
        elif 0 < abs(self.a) < 1:
            growth = f"Compressed {abs(self.a)} times"
        else:
            growth = "No dilation"

        return growth

    def h_dilation(self) -> str:
        if abs(self.b) > 1:
            growth = f"Compressed {self.b} times"
        elif 0 < abs(self.b) < 1:
            growth = f"Stretched {self.b} times"
        else:
            growth = "No dilation"

        return growth

    # Reflection

    def v_reflection(self) -> str:
        flip = self.a < 0

        return f"Reflected over x-axis: {flip}"

    def h_reflection(self) -> str:
        flip = self.b < 0

        return f"Reflected over y-axis: {flip}"

    # Translation

    def h_translation(self) -> str:
        if self.c > 0:
            spaces = f"Moved {self.c} spaces(s) to the right"
        elif self.c < 0:
            spaces = f"Moved {self.c} spaces(s) to the left"
        else:
            spaces = "No translation"

        return spaces

    def v_translation(self) -> str:
        if self.d > 0:
            spaces = f"Moved {self.d} space(s) up"
        elif self.d < 0:
            spaces = f"Moved {self.d} space(s) down"
        else:
            spaces = "No translation"

        return spaces


# Driver

print("Enter your terms: ")

a = int(input("a: "))
b = int(input("b: "))
c = int(input("c: "))
d = int(input("d: "))

prime = Transformer(a, b, c, d)

print("=======================")
print("Transformation of function: ")
print(prime.v_dilation())
print(prime.h_dilation())
print(prime.v_reflection())
print(prime.h_reflection())
print(prime.h_translation())
print(prime.v_translation())
