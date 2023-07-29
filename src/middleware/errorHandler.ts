

const errorHandler = (err, _req, res, _next) => {
    console.log("Something went wrong: ", err.message)
       res.status(err.status).send({
           ok: false,
           message: err.message,
           code: err.code
       });
}

export default errorHandler