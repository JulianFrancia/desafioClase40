let instance = null;

export class adminDAOs {

    constructor() {}
    
    getInstance(typeOfInstance) {
        if(!instance) return instance =  new typeOfInstance;
    }

}