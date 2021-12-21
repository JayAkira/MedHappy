import json
import boto3
from boto3.dynamodb.conditions import Key, Attr

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    users = dynamodb.Table('users')
    
    user_email = event['queryStringParameters']["user_email"]
    password = event['queryStringParameters']["password"]
    
    response = users.query(
    KeyConditionExpression = Key('user_email').eq(user_email)
    )
    
    if not response['Items']:
        return {
        "statusCode": 200,
        "body": json.dumps(
            {
            'user_validation': '0',
            'error_message': 'User doesnt exist!'} 
            )
        }
    else:
        
        if (password == response['Items'][0]['password']):
            return {
            "statusCode": 200,
            "body": json.dumps(
                {
                    'user_validation': '1',
                    'user_name': response['Items'][0]['user_name'],
                    'user_email': response['Items'][0]['user_email'],
                    'password': response['Items'][0]['password']
                    }
                )
            }
        else:
            return {
            "statusCode": 200,
            "body": json.dumps(
                {
                'user_validation': '0',
                'error_message': 'password entered is wrong'}  
                )
            }
