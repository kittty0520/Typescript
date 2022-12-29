class Personnel{
    private name: string;
    public age: number;
    readonly log: string; //변경 불가

    constructor(name: string, age: number){
        this.name = name;
        this.age= age;
    }
}