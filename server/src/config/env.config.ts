import dotenv from "dotenv"

// Read the .env file
dotenv.config();

// Interface 
interface EnvData {
    DATABASE_URL: string;
    PORT: number;
    CLIENT_URL: string;
}

// Prepare and export envData
export const envData: EnvData = ({
    DATABASE_URL: process.env.DATABASE_URL!,
    PORT: parseInt(process.env.PORT!),
    CLIENT_URL: process.env.CLIENT_URL!,
});
