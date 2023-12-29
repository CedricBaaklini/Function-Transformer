class Transformer {
    a: number;
    b: number;
    c: number;
    d: number;

    constructor(a: number, b: number, c: number, d: number) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    //Dilation

    vDilation(): string {
        let growth: string;

        if (Math.abs(this.a) > 1) {
            growth = `Stretched ${Math.abs(this.a)} times`;
        } else if (Math.abs(this.a) > 0 && Math.abs(this.a) < 1) {
            growth = `Compressed ${Math.abs(this.a)} times`;
        } else {
            growth = "No dilation";
        }

        return growth;
    }

    hDilation(): string {
        let growth: string;

        if (Math.abs(this.b) > 1) {
            growth = `Compressed ${Math.abs(1/this.b)} times`;
        } else if (Math.abs(this.b) > 0 && Math.abs(this.b) < 1) {
            growth = `Stretched ${Math.abs(1/this.b)} times`;
        } else {
            growth = "No dilation";
        }

        return growth;
    }

    //Reflection

    vReflection(): string {
        let flip = this.a < 0;

        return `Reflected over x-axis: ${flip}`;
    }


    hReflection(): string {
        let flip = this.b < 0;

        return `Reflected over y-axis: ${flip}`;
    }

    //Translation

    hTranslation(): string {
        let spaces: string

        if (this.c > 0) {
            spaces = `Moved ${this.c} space(s) to the left`;
        } else if (this.c < 0) {
            spaces = `Moved ${Math.abs(this.c)} space(s) to the right`;
        } else {
            spaces = "No translation";
        }

        return spaces;
    }

    vTranslation(): string {
        let spaces: string

        if (this.d > 0) {
            spaces = `Moved ${this.d} space(s) up`;
        } else if (this.d < 0) {
            spaces = `Moved ${Math.abs(this.d)} space(s) down`;
        } else {
            spaces = "No translation";
        }

        return spaces;
    }
}


//Driver

let prime = new Transformer(3, 1, 4, 2);

prime.a = 2;
prime.b = -1/4;
prime.c = -2;
prime.d = -4;

console.log("Your function has: ");
console.log("");
console.log(prime.vDilation());
console.log(prime.hDilation());
console.log(prime.vReflection());
console.log(prime.hReflection());
console.log(prime.hTranslation());
console.log(prime.vTranslation());
