class Mobile {
    constructor(name){
        this.name = name;
    }

    logMe(){
        console.log(`The name of mobile is : ${this.name}`);
    }

    static mobileId(){
        console.log("12345");
    }
}

const smartphone = new Mobile("POCO C31");
smartphone.logMe();
// smartphone.mobileId();
Mobile.mobileId();