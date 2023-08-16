import { PrismaClient } from "@prisma/client";
import app from "./app";

const port = process.env.PORT || 4000;
const prisma = new PrismaClient();

async function main(){
    
    app.get('/', (req, res) => {
        res.send('Hello World!')
      })

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
})
}
main();