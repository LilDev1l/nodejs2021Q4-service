const task = {
  type: 'object',
  required: ['title', 'order', 'description', 'userId'],
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'number' },
    description: { type: 'string' },
    userId: { type: ['string', 'null'] },
    boardId: { type: 'string' },
    columnId: { type: ['string', 'null'] }
  }
};

const getAllTasksOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: task
      }
    }
  }
};

const getOneTaskOpts = {
  schema: {
    response: {
      200: task
    }
  }
};

const postTaskOpts = {
  schema: {
    body: task,
    response: {
      201: task
    }
  }
};

const putTaskOpts = {
  schema: {
    body: task,
    response: {
      200: task
    }
  }
};

const deleteTaskOpts = {
  schema: {
    response: {
      204: { type: 'string', default: 'No Content' }
    }
  }
};

module.exports = {
  getAllTasksOpts,
  getOneTaskOpts,
  postTaskOpts,
  putTaskOpts,
  deleteTaskOpts
};
