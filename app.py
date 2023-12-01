from flask import Flask,request, jsonify

app = Flask(__name__)

# @app.route('/s8_flask_app/hello',methods=['GET'])
# def hello():
#     return jsonify({'message':'Yolo'})
#
# @app.route('/s8_flask_app/hello2',methods=['GET'])
# def hello2():
#     return jsonify({'message':'Yolo2'})
#
#
# @app.route('/s8_flask_app/posting',methods=['POST'])
# def posting():
#     data={}
#     data['name']= request.json['name']
#     data['age'] = request.json['age']
#
#     return jsonify({'Name':data['name'],
#                     'Age': data['age']
#     })

from router import query1_api1_div
from router import query1_api1_dis
from router import query2_api2_cash
from router import query2_api2_mobile
from router import query3_api3
from router import query4_api4
from router import query5_api5
from router import query6_api6
from router import query7_api7
from router import query8_api8
from router import query9_api9
from router import query10_api10

app.register_blueprint(query1_api1_div,url_prefix='/api/')
app.register_blueprint(query1_api1_dis,url_prefix='/api/')
app.register_blueprint(query2_api2_cash,url_prefix='/api/')
app.register_blueprint(query2_api2_mobile,url_prefix='/api/')
app.register_blueprint(query3_api3,url_prefix='/api/')
app.register_blueprint(query4_api4,url_prefix='/api/')
app.register_blueprint(query5_api5,url_prefix='/api/')
app.register_blueprint(query6_api6,url_prefix='/api/')
app.register_blueprint(query7_api7,url_prefix='/api/')
app.register_blueprint(query8_api8,url_prefix='/api/')
app.register_blueprint(query9_api9,url_prefix='/api/')
app.register_blueprint(query10_api10,url_prefix='/api/')

if __name__ == '__main__':
    app.run(host='localhost',port=5000,debug=True)
