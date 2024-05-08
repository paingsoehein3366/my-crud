function catchAsync(cb) {
      return (req, res, next) => {
            console.log("req", req.error);
            cb(req, res, next).catch(next);
      }
};
module.exports = catchAsync;