const infoMessages = (resource) => ({
    notFoundMessage: (id) => `Could not find ${resource} with id: ${id}`,
    uuidInvalidMessage: (uuid) => `Invalid uuid: ${uuid}`
  })

module.exports = infoMessages;
