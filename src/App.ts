import express, {Express} from "express";
import dotevn from "dotenv";

dotevn.config();
class App {
    private app: Express;
    private port: number;
    constructor(){
        this.app = express();
        this.port = Number(process.env.PORT) || 8000;
        this.configure();
        this.startModules();
    }
    private configure(){
        this.app.use(express.json());
        this.app.use(express.urlencoded());
    }
    private startModules(){
        console.log("load modules");
        this.app.get("/", (request, response)=>{
            response.send("hola mi primer servidor");
        });
    }
    public getApp(){
        return this.app;
    }
    public getPort(){
        return this.port;
    }

}
export default App;