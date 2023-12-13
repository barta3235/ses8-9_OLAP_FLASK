from flask import jsonify
from flask.views import MethodView
from QueryController.Analysis5 import Analysis5_1
from QueryController.Analysis5 import Analysis5_2



class Analysis5API_1(MethodView):
    def __init__(self):
        self.a5_1=Analysis5_1()

    def get(self):
        result5_1= self.a5_1.execute5_1()
        return jsonify(result5_1)


class Analysis5API_2(MethodView):
    def __init__(self):
        self.a5_2=Analysis5_2()

    def get(self):
        result5_2= self.a5_2.execute5_2()
        return jsonify(result5_2)