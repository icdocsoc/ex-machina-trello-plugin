var draftEmail = function (t, opts) {
    console.log("Test")
    fetch("https://docsoc-ex-machina-trello.herokuapp.com/", {
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
            callback: draftEmail
        }];
    }
});