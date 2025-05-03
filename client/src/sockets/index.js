// sockets/index.js

// This will be used once the backend server is ready
// Right now, return dummy functions
export const connectToSocket = () => {
    console.log("Socket: waiting for backend...");
  };
  
  export const emitEvent = (event, data) => {
    console.log(`Emitting [${event}]:`, data);
  };
  
  export const onEvent = (event, callback) => {
    console.log(`Listening to [${event}] – dummy mode.`);
  };
  