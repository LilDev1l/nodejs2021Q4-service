const { validate: uuidValidate } = require('uuid');
const { StatusCodes } = require('http-status-codes');
const { InvalidDataInRequestError } = require('../errors/index');

const infoMessagesWithContext = (context) => ({
  notFoundMessage: (id) => `Could not find ${context} with id: ${id}`,
});

const infoMessages = {
  uuidInvalidMessage: (uuid) => `Invalid uuid: ${uuid}`
};

const validId = (nameId) => (req, reply, next) => {
  const id = req.params[nameId];
  if (id) {
    if (!uuidValidate(id)) {
      throw new InvalidDataInRequestError(StatusCodes.BAD_REQUEST, infoMessages.uuidInvalidMessage(id));
    }
  }
  next();
}

module.exports = {
  infoMessagesWithContext,
  infoMessages,
  validId
};