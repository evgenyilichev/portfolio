class Logger {
    //noinspection JSMethodCanBeStatic

    log(message:string) {
        console.log(message)
    }
}

const logger = new Logger();
logger.log("Hello World");
