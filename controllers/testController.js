class TestController {
  getTestData = async (req, res, next) => {
    await this.delay();
    res.json({
      success: true,
      message: 'testing from test data controller',
      test: req.data,
      responseTime: new Date().getTime() - new Date(req.startTime).getTime(),
    });
  };

  delay = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  };

  getTest = async (req, res, next) => {
    res.json({
      success: true,
      message: 'testing from test controller',
    });
  };
}
export default TestController;
