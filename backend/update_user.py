import json
import boto3
from boto3.dynamodb.conditions import Key, Attr

import json
import boto3
from boto3.dynamodb.conditions import Key, Attr

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    users = dynamodb.Table('users')
    
    user_email = event['queryStringParameters']["user_email"]
    user_name = event['queryStringParameters']["user_name"]
    age = event['queryStringParameters']["age"]
    dob = event['queryStringParameters']["dob"]
    insurance_company = event['queryStringParameters']["insurance_company"]
    insurance_id = event['queryStringParameters']["insurance_id"]
    BIN = event['queryStringParameters']["BIN"]
    PCN = event['queryStringParameters']["PCN"]
    
    response = users.update_item(
        Key={
        'user_email': user_email,
        'user_name' : user_name
        },
        AttributeUpdates={
            'age': {
                'Value': age,
                'Action':'PUT'
            },
            'dob': {
                'Value': dob,
                'Action':'PUT'
            },
            'insurance_company': {
                'Value': insurance_company,
                'Action':'PUT'
            },
            'insurance_id': {
                'Value': insurance_id,
                'Action':'PUT'
            },
            'BIN': {
                'Value': BIN,
                'Action':'PUT'
            },
            'PCN': {
                'Value': PCN,
                'Action':'PUT'
            }
        },
        ReturnValues='ALL_NEW'
    )
    
    return {
             "statusCode": 200,
             "body": json.dumps(response)
    }
    
