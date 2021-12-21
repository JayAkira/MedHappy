import json
import boto3
from boto3.dynamodb.conditions import Key, Attr

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    users = dynamodb.Table('medicines')
    
    user_email = event['queryStringParameters']["user_email"]
    title = event['queryStringParameters']["title"]
    description = event['queryStringParameters']["description"]
    frequency = event['queryStringParameters']["frequency"]
    time = event['queryStringParameters']["time"]
    amount = event['queryStringParameters']["amount"]
    unit = event['queryStringParameters']["unit"]
    
    response = users.put_item(
        Item={
            'user_email': user_email,
            'title': title,
            'description': description,
            'frequency': frequency,
            'time': time,
            'amount': amount,
            'unit': unit
        }
    )
    
    return {
             "statusCode": 200,
             "body": json.dumps(response)
    }