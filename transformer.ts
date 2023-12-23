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

    vDilation(): String {
        let growth: String;

        if (Math.abs(this.a) > 1) {
            growth = `Stretched ${Math.abs(this.a)} times`;
        } else if (Math.abs(this.a) > 0 && Math.abs(this.a) < 1) {
            growth = `Compressed ${Math.abs(this.a)} times`;
        } else {
            growth = "No dilation";
        }

        return growth;
    }
}
