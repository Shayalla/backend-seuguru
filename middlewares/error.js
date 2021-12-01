const error = (err, _req, res, _next) => { 
    console.log('ERRO AQUI ===>', err);
    return res.status(500).json(err);
};

module.exports = error;