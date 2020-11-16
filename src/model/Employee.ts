interface IEmployee {
    empName: string;
    empAge: number;
}

export class Employee implements IEmployee {

    static EMP_STATUS: number = 79979;

    private _empName: string = "Roger";
    private _empAge: number = 28;

    constructor() {
        console.log(" Employee constructor called. ");
    }

    public get empName() {
        return this._empName;
    }
    public get empAge() {
        return this._empAge;
    }
    public set empName(eName: string) {
        this._empName = eName;
    }
    public set empAge(eAge: number) {
        this._empAge = eAge;
    }

}