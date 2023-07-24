const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false})); // this is used when data / payload is sent as req body method / form urlencoded;
// "urlencoded" is using a package called as "querystring", but this package is internally uses another package called as "body-parser". But "body-parser" package is deprecated and will be removed any time. If "extended" is false, then "urlencoded" will use the package called as "qs", which is the latest package.
app.use(express.json()); // this is used when data / payload is sent as req body as JSON

// Member Routes
    // http://localhost:5000/v1/api/Members
const MemberRoutes = require("./routes/prcmember-routes");
app.use("/v1/api/prcmembers", MemberRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
});