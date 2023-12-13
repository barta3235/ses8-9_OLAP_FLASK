from flask import jsonify
from flask.views import MethodView
from QueryController.Analysis4 import Analysis4_1
from QueryController.Analysis4 import Analysis4_2



class Analysis4API_1(MethodView):
    def __init__(self):
        self.a4_1=Analysis4_1()

    def get(self):
        result4_1= self.a4_1.execute4_1()
        return jsonify(result4_1)


class Analysis4API_2(MethodView):
    def __init__(self):
        self.a4_2=Analysis4_2()

    def get(self):
        result4_2= self.a4_2.execute4_2()
        return jsonify(result4_2)