import json
import boto3
import flask
import pandas

def handler(event, context):
    body = {
        "message": "Hello, world! Your function executed successfully!",
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response
