import express from "express";
import sum from './sum.js';
const app = express();
const PORT = 8080;

app.get("/home", async (req, res) => {
    res.json({
        mess: "waoo Sameer"
    });
});

app.get("/sum/:a/:b",async(req,res)=>{
    const {a,b}=req.params;
    res.json({
        ans:sum(parseInt(a),parseInt(b))
    })
})

app.listen(PORT, () => {
    console.log("server is listening");
});