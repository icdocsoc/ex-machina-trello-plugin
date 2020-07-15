const draftEmail = (t, opts) => {
    fetch("https://docsoc-ex-machina.herokuapp.com/trello", {
        method: "POST",

        headers: {
            "contentType": "application/json"
        },
        body: JSON.stringify(t)
    })
};

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, options) {
        return [{
            text: 'Draft Email',
            callback: draftEmail,
        }];
    }
});