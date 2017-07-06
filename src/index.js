import template from 'babel-template'

function invokedTemplate(op) {
  return template(`
      (function (LEFT_ARG, RIGHT_ARG) { 
        if (LEFT_ARG !== null && LEFT_ARG !== undefined
             && LEFT_ARG[Symbol.for("${op}")])
            return LEFT_ARG[Symbol.for("${op}")](RIGHT_ARG)
        else return LEFT_ARG ${op} RIGHT_ARG
      })
  `)
}
export default function({ types: t }) {
  return {
    visitor: {
      BinaryExpression (path) {
        if (path.node.hasOwnProperty('_fromTemplate')) return

        const func = invokedTemplate(path.node.operator)({
          LEFT_ARG: path.scope.generateUidIdentifier("left"),
          RIGHT_ARG: path.scope.generateUidIdentifier("right"),
        }).expression

        path.replaceWith(
          t.callExpression(
            func,
            [path.node.left, path.node.right]
          )
        )
      }
    }
  }
}
