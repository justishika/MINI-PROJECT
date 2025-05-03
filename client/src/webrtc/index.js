// webrtc/index.js

export const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false
      });
      console.log("Screen sharing started");
      return stream;
    } catch (err) {
      console.error("Error starting screen share:", err);
      return null;
    }
  };
  
  export const stopScreenShare = (stream) => {
    if (!stream) return;
    stream.getTracks().forEach(track => track.stop());
    console.log("Screen sharing stopped");
  };
  