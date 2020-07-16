const draftEmail = function (t) {
    fetch("https://docsoc-ex-machina.herokuapp.com/trello", {
        method: "POST",

        headers: {
            "contentType": "application/json"
        },
        body: JSON.stringify(t)
    })
};

TrelloPowerUp.initialize({
    'card-buttons': function (t, options) {
        return [{
            text: 'Draft Email',
            callback: draftEmail,
        }];
    }
});