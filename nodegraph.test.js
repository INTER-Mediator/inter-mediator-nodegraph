const IMLibNodeGraph = require('./index.js')

test('IMLibNodeGraph Test', function () {
  'use strict'
  IMLibNodeGraph.clear()
  IMLibNodeGraph.addEdge('a', 'b')
  IMLibNodeGraph.addEdge('b', 'c')
  IMLibNodeGraph.addEdge('c', 'd')
  IMLibNodeGraph.addEdge('a', 'e')
  IMLibNodeGraph.addEdge('b', 'f')
  IMLibNodeGraph.addEdge('a', 'f')
  IMLibNodeGraph.addEdge('i', 'j')
  IMLibNodeGraph.addNode('x')

  expect(IMLibNodeGraph.getLeafNodesWithRemoving()).toStrictEqual(['d', 'e', 'f', 'j', 'x'])
  expect(IMLibNodeGraph.getLeafNodesWithRemoving()).toStrictEqual(['c', 'i'])
  expect(IMLibNodeGraph.getLeafNodesWithRemoving()).toStrictEqual(['b'])
  expect(IMLibNodeGraph.getLeafNodesWithRemoving()).toStrictEqual(['a'])
  expect(IMLibNodeGraph.nodes.length).toBe(0)
})
