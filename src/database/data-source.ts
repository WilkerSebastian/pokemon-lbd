import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.NODE_ENV == "development", 
    dropSchema: process.env.NODE_ENV == "development",
    logging: false,
    entities: ["src/model/*.ts"]
});

export async function ensureDataSourceInitialized() {

    if (!AppDataSource.isInitialized) 
        await AppDataSource.initialize();

}  