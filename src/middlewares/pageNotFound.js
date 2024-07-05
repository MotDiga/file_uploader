const pageNotFound = function (req, res) {
    res.status(404).json("Page not Found");
};

module.exports =  pageNotFound;