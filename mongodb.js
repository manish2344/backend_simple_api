// Import the mongoose module
const mongoose = require("mongoose");
const mongoDB = "mongodb+srv://manishpanwarr:tmb5YGayELJEOs70@cluster0.aniv4mp.mongodb.net/mernstack";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("hello data connected");
});