const AWS = require('aws-sdk')

exports.sendMessage = async (event, connectionId, message) => {
  console.log(`sending message: ${message} to ${connectionId}...`)
  const apigwManagementApi = new AWS.ApiGatewayManagementApi({
    apiVersion: '2018-11-29',
    endpoint: process.env.websocketEndpoint
  })
  const params = {
    ConnectionId: connectionId,
    Data: message
  }
  await apigwManagementApi.postToConnection(params).promise()
}
