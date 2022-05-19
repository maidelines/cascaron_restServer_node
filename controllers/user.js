const {response} = require('express')

const userGet = (req, res = response) => {
    const query = req.query
    res.json({ status: true, msg: "Get Api" });
  }

  const userPost = (req, res) => {
    const body = req.body;
    res.json({ msg: "Post Api" , body, query});
  }
  
  const userPut = (req, res) => {
   const id = req.params.id;

    res.json({ status: true, msg: "Put Api", id });
  };
  
  const userDelete = (req, res) => {
    res.json({ status: true, msg: "Delete element of Api" });
  };


  module.exports = {userGet, userPost, userPut, userDelete};
  