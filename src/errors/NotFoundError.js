class NotFoundError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode =  statusCode;
  }
}

module.exports = NotFoundError;