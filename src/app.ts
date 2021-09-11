import express from "express";
import log from "./logger";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 1337;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://anuradhamudalige.github.io/book-catalog-app/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port, () => {
    log.info(`Server listing at PORT:${port}`);

    routes(app);
});
