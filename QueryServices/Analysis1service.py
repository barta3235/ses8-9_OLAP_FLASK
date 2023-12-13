from flask import jsonify
from flask.views import MethodView
from QueryController.Analysis1 import Analysis1_1
from QueryController.Analysis1 import Analysis1_2


class Analysis1API_1(MethodView):
    def __init__(self):
        self.a1_1=Analysis1_1()

    def get(self):
        result1_1= self.a1_1.execute1_1()
        return jsonify(result1_1)


class Analysis1API_2(MethodView):
    def __init__(self):
        self.a1_2=Analysis1_2()

    def get(self):
        result1_2= self.a1_2.execute1_2()
        return jsonify(result1_2)