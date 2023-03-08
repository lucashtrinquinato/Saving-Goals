import { EnvConfig } from "./enviroments-model";
import env  from "../../config/environment.json";

let envConfig: any = global;
export let Env: any = global;

if (process.env.NODE_ENV == 'environment'){
     envConfig = env;
}  

Env = envConfig as EnvConfig;