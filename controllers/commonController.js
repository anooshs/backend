import TestController from './testController.js';

class CommonController {
    constructor() {
        this.testDataController = new TestController();
    }

    getTestData = (req, res) => {
        this.testDataController.getTestData(req, res);
    };

    getTest = (req, res) => {
        this.testDataController.getTest(req, res);
    };
}

export default CommonController;