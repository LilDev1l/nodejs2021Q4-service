const column = require('../column/column.options');

const board = {
  type: 'object',
  required: ['title', 'columns'],
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    columns: {
      type: 'array',
      items: column
    },
  }
};

const getAllBoardsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: board
      }
    }
  }
};

const getOneBoardOpts = {
  schema: {
    response: {
      200: board
    }
  }
};

const postBoardOpts = {
  schema: {
    body: board,
    response: {
      201: board
    }
  }
};

const putBoardOpts = {
  schema: {
    body: board,
    response: {
      200: board
    }
  }
};

const deleteBoardOpts = {
  schema: {
    response: {
      204: {}
    }
  }
};

module.exports = {
  getAllBoardsOpts,
  getOneBoardOpts,
  postBoardOpts,
  putBoardOpts,
  deleteBoardOpts
}
