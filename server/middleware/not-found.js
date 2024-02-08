const notFoundMiddleware = (req, res) => {
  res.send(404).send("Routes does not exit");
};

export default notFoundMiddleware;
