import config from "config";
import express from "express";
import log from "./logger";
import routes from "./routes";

const port = config.get<number>('port');
const host = config.get<string>('host');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port, host, () => {
    log.info(`Server listing at http://${host}:${port}`);

    // connect();
    //
    routes(app);
});
