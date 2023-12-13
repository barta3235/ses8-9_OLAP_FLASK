from flask import jsonify
from flask.views import MethodView
from QueryController.Analysis2 import Analysis2_1
from QueryController.Analysis2 import Analysis2_2


class Analysis2API_1(MethodView):
    def __init__(self):
        self.a2_1=Analysis2_1()

    def get(self):
        result2_1= self.a2_1.execute2_1()
        return jsonify(result2_1)


class Analysis2API_2(MethodView):
    def __init__(self):
        self.a2_2=Analysis2_2()

    def get(self):
        result2_2= self.a2_2.execute2_2()
        return jsonify(result2_2)