const Questions = require("../models/questionModel");
const Options = require("../models/OptionsModel");

module.exports.front = async function (req, res) {
  try {
    // finding all the questions and returning
    let question = await Questions.find({}).populate({
      path: "options",
    });

    if (question) {
      return res.status(200).json({
        message: "Here is the questions",
        data: question,
      });
    } else {
      return res.status(400).json({
        message: "Question does not exists",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error from the server ",
      data: err,
    });
  }
};