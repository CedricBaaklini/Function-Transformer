# This file acts as a prototype for the function transformer.
# Once this prototype is successful, it will be translated into typescript and interpreted via Node for unit testing
class Transformer:
    def __init__(self, a: float, b: float, c: float, d: float):
        self.a = a
        self.b = b
        self.c = c
        self.d = d

    # Dilation
    def vDilation(self) -> str:
        if abs(self.a) > 1:
            dilation = f"Stretched {self.a} times"
        elif 0 < abs(self.a) < 1:
            dilation = f"Compressed {self.a} times"
        else:
            dilation = "No dilation"

        return dilation

    def hDilation(self) -> str:
        if abs(self.b) > 1:
            dilation = f"Compressed {self.b} times"
        elif 0 < abs(self.b) < 1:
            dilation = f"Stretched {self.b} times"
        else:
            dilation = "No dilation"

        return dilation

    # Reflection

    def vReflection(self) -> str:
        if self.a < 0:
            flip = True
        else:
            flip = False

        return f"Reflected over x-axis: {flip}"

    def hReflection(self) -> str:
        if self.b < 0:
            flip = True
        else:
            flip = False

        return f"Reflected over x-axis: {flip}"

    # Translation

    def hTranslation(self) -> str:
        if self.c > 0:
            spaces = f"Moved {self.c} spaces(s) right"
        elif self.c < 0:
            spaces = f"Moved {self.c} spaces(s) left"
        else:
            spaces = "No translation"

        return spaces

    def vTranslation(self) -> str:
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

print(prime.hTranslation())
