function infoLinkController(){

}
infoLinkController.prototype.getAll = async (req,res) => {
    let links = {
        pornhub: "www.pornhub.com",
        xvideos: "www.xvideos.com",
        cadastro:"<input type='text' value='eita porra'>"
    };
    res.send(links.cadastro);
};

module.exports = infoLinkController;