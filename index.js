const clockIn = require("./clockIn");

exports.main_handler = async (event, context, callback) => {
  return main();
};

function main() {
  console.log("正在执行完美打卡！");
  clockIn();
  console.log("完美打卡执行完成！");
  return "ok";
}

exports.main = main;
