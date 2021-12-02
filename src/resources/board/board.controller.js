const boardService = require('./board.service');

const getAll = (req, reply) => {
  const boards = boardService.getAll();

  reply.send(boards);
};

const getOne = (req, reply) => {
  const { boardId } = req.params;
  const board = boardService.getOne(boardId);

  reply.send(board);
};

const add = (req, reply) => {
  const newParam =  req.body;
  const newBoard = boardService.addOne(newParam);

  reply.code(201).send(newBoard);
}

const remove = (req, reply) => {
  const { boardId } = req.params;
  boardService.remove(boardId);

  reply.code(204).send();
}

const update = (req, reply) => {
  const { boardId } = req.params;
  const updateParam =  req.body;
  const updateBoard = boardService.update(boardId, updateParam);

  reply.code(200).send(updateBoard);
}

module.exports = {
  getAll, getOne,
  add,
  remove,
  update
}
