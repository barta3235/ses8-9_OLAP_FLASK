from flask import jsonify,request
from flask.views import MethodView
from QueryController.query7 import Query7

class Query7API(MethodView):
    def __init__(self):
        self.q7=Query7()

    def get(self):
        result7= self.q7.execute7()
        return jsonify(result7)

    def post(self):
        x= request.json['days']
        self.q7_1=Query7()
        result_1=self.q7_1.execute7(dd=x)
        return jsonify(result_1)


