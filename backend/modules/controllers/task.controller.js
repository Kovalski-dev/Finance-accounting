const Task = require("../../db/index");

module.exports.getAllCases = (req, res) => {
  Task.find().then((result) => {
    res.send(result);
  });
};

module.exports.addNewCase = (req, res) => {
  const task = new Task(req.body);
  task.save().then((result) => {
    res.send(result);
  });
};

module.exports.changeCase = (req, res) => {
  Task.updateOne({ _id: req.body._id }, req.body).then((result) => {
    Task.find({ _id: req.body._id }).then((result) => {
      res.send(result);
    });
  });
};

module.exports.deleteCase = (req, res) => {
  Task.deleteOne({ _id: req.query._id }).then((result) => {
    res.send(result);
  });
};
