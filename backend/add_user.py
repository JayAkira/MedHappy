import json
import boto3
from boto3.dynamodb.conditions import Key, Attr

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    users = dynamodb.Table('users')
    
    user_email = event['queryStringParameters']["user_email"]
    user_name = event['queryStringParameters']["user_name"]
    password = event['queryStringParameters']["password"]
    
    response = users.put_item(
        Item={
            'user_email': user_email,
            'user_name': user_name,
            'password': password
        }
    )
    
    return {
             "statusCode": 200,
             "body": json.dumps(response)
    }