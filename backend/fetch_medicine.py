import json
import boto3
from boto3.dynamodb.conditions import Key, Attr

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    medicines = dynamodb.Table('medicines')
    
    user_email = event['queryStringParameters']["user_email"]
    
    response = medicines.query(
    KeyConditionExpression = Key('user_email').eq(user_email)
    )
    
    if not response['Items']:
        return {
        "statusCode": 200,
        "body": json.dumps(
            {
            'fetch_successful': '0',
            'error_message': 'Either user doesnt exist or the user doesnt have any reminders'} 
            )
        }
    else:
        return {
        "statusCode": 200,
        "body": json.dumps(
            {
                'fetch_successful': '1',
                'medicines': response['Items']
                }
            )
        }
