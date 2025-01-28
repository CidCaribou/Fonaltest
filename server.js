// Credit to the blooketbot authors, I learned how the joining worked from them.

const express = require("express")
const app = express();
const path = require("path");
const fetch = (...args) => import("node-fetch").then(({
    default: fetch
}) => fetch(...args));
const cbp = require("cloudflare-bypasser");
const cf = new cbp();

let sdf = [];

app.use(express.json());
app.use(express.static("public"));
eval(Buffer.from(process.env.blooket_bypass,"base64").toString("utf-8"));

// Get blooket cookie
fetch("https://goldquest.blooket.com/play").then((resp) => {
    global.blooketCookie = resp.headers.get("Set-Cookie").split(";")[0];
});

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/a.html"));
});

app.get("/discord", (req, res) => {
    res.redirect("https://discord.gg/JsJe7bdYvE");
});

app.post("/join", async (req, res) => {
    try {
        const result = await makeJoinReq(process.env.bsid,JSON.stringify(req.body));
        res.send(result);
    } catch(e){
        res.send(JSON.stringify({ success:false, errType:"", msg: e.stack }));
    };
    console.log("Joining game " + req.body.id + " with name " + req.body.name + "!");
});

// start it uppp
app.listen(process.env.PORT || 3000, () => {
    console.log("Server started.");
});
