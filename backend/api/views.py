from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_data(request):
    data = {
        'message': 'Hello World!'
    }
    return Response(data)
