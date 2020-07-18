\\listening

client.on('ready', () => {
	console.log("READY");
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: '[your text here]',
            type: "LISTENING",
        }
    });
});

\\streaming

client.on('ready', () => {
	console.log("READY");
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: '[your text here]',
            type: "STREAMING",
            url: [twitch url here],
        }
    });
});

\\playing

client.on('ready', () => {
	console.log("READY");
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: '[your text here]',
            type: "PLAYING",
        }
    });
});
