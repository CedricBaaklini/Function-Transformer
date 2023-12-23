class Transformer {
    private a: number;
    private b: number;
    private c: number;
    private d: number;

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

    hDilation(): String {
        let growth: String;

        if (Math.abs(this.b) > 1) {
            growth = `Compressed ${Math.abs(this.b)} times`;
        } else if (Math.abs(this.b) > 0 && Math.abs(this.b) < 1) {
            growth = `Stretched ${Math.abs(this.b)} times`;
        } else {
            growth = "No dilation";
        }

        return growth;
    }

    //Reflection

    vReflection(): String {
        let flip = this.a < 0;

        return `Reflected over x-axis: ${flip}`;
    }


    hReflection(): String {
        let flip = this.b < 0;

        return `Reflected over y-axis: ${flip}`;
    }
}
