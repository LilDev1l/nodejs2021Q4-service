const userReq = {
  type: 'object',
  required: ['name', 'login', 'password'],
  properties: {
    name: { type: 'string' },
    login: { type: 'string' },
    password: { type: 'string' }
  }
};

const userRes = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    login: { type: 'string' }
  }
};

const getAllUsersOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: userRes
      }
    }
  }
};

const getOneUserOpts = {
  schema: {
    response: {
      200: userRes
    }
  }
};

const postUserOpts = {
  schema: {
    body: userReq,
    response: {
      201: userRes
    }
  }
};

const putUserOpts = {
  schema: {
    body: userReq,
    response: {
      200: userRes
    }
  }
};

const deleteUserOpts = {
  schema: {
    response: {
      204: { type: 'string', default: 'No Content' }
    }
  }
};

module.exports = {
  getAllUsersOpts,
  getOneUserOpts,
  postUserOpts,
  putUserOpts,
  deleteUserOpts
};
