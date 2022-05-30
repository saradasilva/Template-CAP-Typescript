import "reflect-metadata";
import cds from "@sap/cds";
import express, { Application } from "express";
import { createCombinedHandler } from "cds-routing-handlers";
import proxy from '@sap/cds-odata-v2-adapter-proxy';

const app = express();


const handler = createCombinedHandler({
    handler: [__dirname + "/entities/**/*.js", __dirname + "/functions/**/*.js"]
});


app.use(proxy());


cds.on("served", (server) => {
    //nothing
});


app.get('/v2/', function(req, res) {
    res.redirect('/v2/catalogsrv/')
});

app.get('/', function(req, res) {
    res.redirect('/catalogsrv/')
});

cds.serve("all").at("catalogsrv").in(app).with(handler);

// Run the server.
const port = process.env.PORT || 3001;
app.listen(port, async () => {
    console.info(`Server is listing at http://localhost:${port}`);
});