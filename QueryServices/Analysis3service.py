from flask import jsonify
from flask.views import MethodView
from QueryController.Analysis3 import Analysis3_1
from QueryController.Analysis3 import Analysis3_2



class Analysis3API_1(MethodView):
    def __init__(self):
        self.a3_1=Analysis3_1()

    def get(self):
        result3_1= self.a3_1.execute3_1()
        return jsonify(result3_1)


class Analysis3API_2(MethodView):
    def __init__(self):
        self.a3_2=Analysis3_2()

    def get(self):
        result3_2= self.a3_2.execute3_2()
        return jsonify(result3_2)