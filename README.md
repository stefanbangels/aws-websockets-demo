aws-websockets-demo
===================

# Description
Demo material for the AWS Web Sockets presentation

# Prerequisites
* Latest node.js 14.x

# Intellij setup
* Checkout the source code and import the project from existing sources
* In Intellij settings:
  * search for _Languages and Frameworks, Javascript_ and select _ECMASript 6_
  * search for _Languages and Frameworks, Nodejs and NPM_ and enable _Coding assistance for Nodejs_
  * search for  _Editor, Inspections, Javascript, Code quality tools_ and enable _Standard code style_

# Serverless setup
* npm install serverless -g
* npm install wscat -g

# Deploy
* serverless deploy

# Test
* wscat -c wss://xxx.execute-api.eu-west-1.amazonaws.com/dev (you can find the xxx in your API gateway configuration)


