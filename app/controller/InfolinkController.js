function infoLinkController(){

}
infoLinkController.prototype.getAll = async (req,res) => {
    let links = {
        cadastro:"<input type='text' value='eita porra'>"
    };
    res.send(links.cadastro);
};
infoLinkController.prototype.post = async (req,res) => {

    
    res.send(links.cadastro);
};

module.exports = infoLinkController;