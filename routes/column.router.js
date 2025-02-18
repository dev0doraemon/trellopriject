const express = require('express');
const router = express.Router();

const ColumnController = require('../controllers/column.controller.js');
const columnController = new ColumnController();

const { authorizated } = require('../middleware/userState.middleware.js');

// 컬럼 추가
router.post('/:boardId/column', authorizated, columnController.createColumn);

// 컬럼 조회
router.get('/:boardId/column', authorizated, columnController.getAllColumns);

// 컬럼 수정(name)
router.put(
  '/:boardId/column/:columnId/name',
  authorizated,
  columnController.modifyNameOfColumn,
);

// 컬럼 수정(postion)
router.put(
  '/:boardId/column/:columnId/position',
  authorizated,
  columnController.modifyPositionOfColumn,
);

// 컬럼 삭제
router.delete(
  '/:boardId/column/:columnId',
  authorizated,
  columnController.deleteColumn,
);

module.exports = router;
