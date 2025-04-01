import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        "botId": "4d4706d5-110c-4015-a2c1-154ad21d3c32",
        "clientId": "1a215e37-124f-4b62-840b-52e9a406d0db",
        "host": "https://cdn.botpress.cloud/webchat/v1",
        "botName": "Lwandile",
        "botAvatar": "https://files.bpcontent.cloud/2025/03/23/11/202503231111828-KG9NEE9M.png",
        "botDescription": "Lwandile is here to help you with buying, selling, and financing cars by providing expert AI assistance.",
        "color": "#fff",
        "variant": "solid",
        "themeMode": "dark",
        "fontFamily": "rubik",
        "radius": 0.5,
        "hideWidget": false,
        "showCloseButton": true,
      });
    };
  }, []);

  return null; // This component just injects the script, no UI needed
};

export default BotpressChat;
