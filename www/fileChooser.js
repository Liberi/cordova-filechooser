module.exports = {
    open: function (success, failure, mimes) {
        cordova.exec(success, failure, "FileChooser", "open", [mimes]);
    }
};
