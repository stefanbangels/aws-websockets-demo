const AWS = require('aws-sdk')
const dynamoDbClient = new AWS.DynamoDB.DocumentClient({})

const TABLE_NAME = 'Connections'

exports.saveConnection = async ({ connectionId }) => {
  await dynamoDbClient.put({
    TableName: TABLE_NAME,
    Item: {
      connectionId
    }
  }).promise()
}

exports.removeConnection = async ({ connectionId }) => {
  await dynamoDbClient.delete({
    TableName: TABLE_NAME,
    Key: {
      connectionId
    }
  }).promise()
}
