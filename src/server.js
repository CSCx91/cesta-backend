import http from 'http';
import debug from 'debug';
class Server {
    
    constructor(app){
        this.server;
        this.port;    
        this.app=app;
    };
    /**
     * Init the Server
     */
    init(){
        /**
        * Get port from environment and store in Express.
        */
        var port=this.normalizePort(process.env.PORT||'3001');
        this.app.set('port',port);
        console.log('PORT : ' + port);
        /**
        * Create HTTP server.
        */
        this.server=http.createServer(this.app);
        /**
         * Listen on provided port, on all network interfaces.
         */
        this.server.listen(port);
        this.server.on('error', this.onError.bind(this));
        console.log('BINDED ERROR EVENT');
        this.server.on('listening', this.onListening.bind(this));
        console.log('BINDED LISTENING EVENT');
    }
    /**
     * Normalize a port into a number, string, or false.
     */
    normalizePort(val){
        /**
         * Normalize a port into a number, string, or false.
        */
        var port = parseInt(val, 10);
        if (isNaN(port)) {
            // named pipe
            return val;
        }
        if (port >= 0) {
            // port number
            return port;
        }
        return false;
    };
    /**
    * Event listener for HTTP server "error" event.
    */
    onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }
        
        var bind = typeof this.port === 'string'
            ? 'Pipe ' + this.port
            : 'Port ' + this.port;
        
        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
            case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
            default:
            throw error;
        }
    };
    /**
    * Event listener for HTTP server "listening" event.
    */
    onListening() {
        var addr = this.server.address();
        var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
        debug('Listening on ' + bind);
  }
      
}
export default Server;