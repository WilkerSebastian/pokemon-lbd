import { AppDataSource } from "./database/data-source";

async function main() {

    try {
     
        await AppDataSource.initialize();
    
    } catch (error) {
        
        console.log("erro ao conectar com o banco: ", error);
        return;

    }

    await AppDataSource.destroy();

}

main()