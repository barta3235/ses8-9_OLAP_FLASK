from flask import jsonify
from flask.views import MethodView
from QueryController.query1 import Query1_div
from QueryController.query1 import Query1_dis

class Query1API_div(MethodView):
    def __init__(self):
        self.q1_div=Query1_div()

    def get(self):
        result_div= self.q1_div.execute1_div()
        return jsonify(result_div)


class Query1API_dis(MethodView):
    def __init__(self):
        self.q1_dis=Query1_dis()

    def get(self):
        result_dis= self.q1_dis.execute1_dis()
        return jsonify(result_dis)