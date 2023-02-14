const dao = require('./connections-dao')
const { sendMessage } = require('./websockets')

exports.handleConnect = async (event) => {
  const connectionId = event.requestContext.connectionId
  console.log(`connected ${connectionId}`)

  // save connection to dynamodb
  await dao.saveConnection({ connectionId })

  return { statusCode: 200, body: 'Success' }
}

exports.handleDisconnect = async (event) => {
  const connectionId = event.requestContext.connectionId
  console.log(`disconnected ${connectionId}`)

  // remove connection from dynamodb
  await dao.removeConnection({ connectionId })

  return { statusCode: 200, body: 'Success' }
}

exports.handleMessage = async (event) => {
  const connectionId = event.requestContext.connectionId
  const body = event.body
  console.log(`received message "${body}" from ${connectionId}`)

  // calculate square
  const number = parseInt(body)
  const square = number * number

  // send message
  await sendMessage(event, connectionId, square.toString())

  return { statusCode: 200, body: 'Success' }
}
