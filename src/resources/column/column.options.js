const column = {
  type: 'object',
  required: ['title', 'order'],
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'number' },
  }
}

module.exports = column;
