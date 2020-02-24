const express = require("express")
const app = express()
const controller = require("./controller")
app.listen(3000, () => {
  "Server running successfully"
})

app.get("api/friends/:friendId",controller.getFriend)
app.get("api/friends", controller.getAllFriends)