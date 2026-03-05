import express from "express";

const app = express();


app.get("/get-environment", (req, res) => {

    if (process.env.NODE_ENV == 'development') {
        res.json({ environment: process.env.NODE_ENV, flag: "DEV" });
    } else {
        res.json({ environment: process.env.NODE_ENV, flag: "PROD" });
    }
})

app.get("/", (req, res) => {
    res.json({ message: "Hello World! Lets Live for Earth (Planetary Health)", status: 200 });
});

app.get("/about", (req, res) => {
    res.json({ message: "About Page", status: 200 });
});

app.get("/contact", (req, res) => {
    res.json({ message: "Contact Page", status: 200 });
});

app.get("/products", (req, res) => {
    res.json({ message: "Products Page", status: 200 });
});

app.get("/Millions", (req, res) => {
    res.json({ message: "Millions Pager", status: 200 })
})

app.get("billions", (req, res) => {
    res.json({ message: "Billions Pager", status: 200 })
})

app.use((req, res) => {
    res.status(404).json({ message: "Page Not Found", status: 404 });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

