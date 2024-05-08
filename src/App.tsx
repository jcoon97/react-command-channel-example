import VideoSDK from "@zoom/videosdk";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    (async () => {
      const client = VideoSDK.createClient();
      await client.init("en-US", "Global", { patchJsMedia: true });
      console.log(client.getCommandClient());
    })();
  }, []);

  return <div>Hello, World!</div>;
}
