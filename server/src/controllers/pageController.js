const getIndexPage = (req,res) => {
    console.log('REQUEST USER:::', req.user);
    res.render("index")
}

export {getIndexPage}