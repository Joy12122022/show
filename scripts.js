const serverUrl = "https://show.joynguyen.online";

const gameLinks = ["2048","bravebird","frog","popup","rainbox"];
gameLinks.forEach(link => {
    document.getElementById(`link${link}`).href = `${serverUrl}/${link}`;
});

