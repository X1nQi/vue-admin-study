const db = require("./db.json");

module.exports = (req, res, next) => {

  // 登录逻辑的实现
  if (req.method === "POST" && req.path === "/login") {
    // 修改请求为json-server标准路由,以便以下json-server能够将数据写入db.json
    const body = req.body;
    const  isFind= db.users.find((item) => {
        return item.account == body.account && item.password == body.password;
      })
    if (isFind){
      res.status(200).send({
        code: 200,
        message: "登录成功",
      })
    }else{
      res.status(500).send({
        code: 400,
        message: "登录失败",
      })
    }
      return;
  }

  // 提交评论
  if (req.method === "POST" && req.path === "/submitComment") {
    // 修改请求为json-server标准路由,以便以下json-server能够将数据写入db.json
    const body = req.body;
    req.path = "/comments";
  }

  // 如果不匹配上述路由，继续下一个中间件
  next();
};
