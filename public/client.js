var draftEmail = function (t, opts) {
    console.log("Test")
    fetch("https://docsoc-ex-machina.herokuapp.com/trello", {
        method: "POST",
        headers: {
            "contentType": "application/json"
        },
        body: JSON.stringify(t)
    })
};

var onBtnClick = function (t, opts) {
    console.log('Someone clicked the button');
    draftEmail(t, opts);
};

TrelloPowerUp.initialize({
    'card-buttons': function (t, options) {
        return [{
            text: 'Draft Email',
            callback: onBtnClick
        }];
    }
});