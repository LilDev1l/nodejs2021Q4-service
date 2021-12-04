const { StatusCodes } = require('http-status-codes');
const boardService = require('./board.service');

const getAll = (req, reply) => {
  const boards = boardService.getAll();

  reply.code(StatusCodes.OK).send(boards);
};

const getOne = (req, reply) => {
  const { boardId } = req.params;
  const board = boardService.getOne(boardId);

  reply.code(StatusCodes.OK).send(board);
};

const add = (req, reply) => {
  const newParam =  req.body;
  const newBoard = boardService.addOne(newParam);

  reply.code(StatusCodes.CREATED).send(newBoard);
}

const remove = (req, reply) => {
  const { boardId } = req.params;
  boardService.remove(boardId);

  reply.code(StatusCodes.NO_CONTENT).send();
}

const update = (req, reply) => {
  const { boardId } = req.params;
  const updateParam =  req.body;
  const updateBoard = boardService.update(boardId, updateParam);

  reply.code(StatusCodes.OK).send(updateBoard);
}

module.exports = {
  getAll, getOne,
  add,
  remove,
  update
}
