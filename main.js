import { betaTest } from "./Exemplo3/algarismo.js"

betaTest();

process.on('SIGINT', () => {
    console.log("Ctrl + C")
    process.exit(0)
});