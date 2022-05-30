import { Handler, Req, OnRead, OnCreate } from "cds-routing-handlers";
import { disneySRV } from "../entities";



 @Handler(disneySRV.SanitizedEntity.Users)
 export class UserHandler {

    @OnRead()
    public async onRead( @Req() req:any):Promise<void>{
        console.log('On read Character')
    }
 };