function error404Middleware (req,res,next) {
	
	res.status(404).render('./user/404');
    }

    module.exports = error404Middleware;