from flask import jsonify
from flask.views import MethodView
from QueryController.query2 import Query2_cash
from QueryController.query2 import Query2_mobile

class Query2API_cash(MethodView):
    def __init__(self):
        self.q2_cash=Query2_cash()

    def get(self):
        result2_cash= self.q2_cash.execute2_cash()
        return jsonify(result2_cash)



class Query2API_mobile(MethodView):
    def __init__(self):
        self.q2_mobile=Query2_mobile()

    def get(self):
        result2_mobile= self.q2_mobile.execute2_mobile()
        return jsonify(result2_mobile)