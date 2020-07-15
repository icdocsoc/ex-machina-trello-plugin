const draftEmail = (t, opts) => {
    console.log('Is this working?????');
};

window.TrelloPowerUp.initialize({
    'card-buttons': function (t, options) {
        return [{
            text: 'Draft Email',
            callback: draftEmail,
        }];
    }
});