# from flask import Flask, request,render_template





# import pickle





# import numpy as np

# app = Flask(__name__)


# model=pickle.load(open('C:/Users/sharvari/Desktop/Turing/model.pkl','rb'))

# @app.route('/')
# def index():
#     return render_template('index.html')
# @app.route('/predict', methods=['POST',"GET"])

# def predict():
#     data = request.get_data()
#     print(data)

#     result = model.predict([[1, 2,13,23]])

#     labels = {

#         0: "Customers with medium annual income and medium annual spend",




#         1: "Customers with high annual income but low annual spend",




#         2: "Customers with low annual income and low annual spend",




#         3: "Customers low annual income but high annual spend",




#         4: "Customers with high annual income and high annual spend"




#     }


#     prediction = {

#         'cluster': int(result),
#         'label': labels[int(result)]
#     }

#     return prediction



# if __name__ == '__main__':

#     app.run(debug=True)

# from flask import Flask, request, jsonify,render_template

# from flask_cors import CORS

# import joblib

# import pickle

# import sklearn
# # import sklearn.cluster.k_means

# import numpy as np

# app = Flask(__name__,template_folder="templates")

# CORS(app)  # Enable Cross-Origin Resource Sharing

# model=pickle.load(open('C:/Users/sharvari/Desktop/Turing/model.pkl','rb'))

# @app.route('/')


# def index():


#     return render_template('index.html')

# @app.route('/predict', methods=['POST',"GET"])

# def predict():
#     if request.method=='POST':

#      data = request.get_json()

#     print(data)

#     p4=int(data['Gender'])

#     p1 = int(data['annual_income'])

#     p2 = int(data['spending_score'])

#     p3 = int(data['Age'])

#     # //model = joblib.load('Customer Segmentation')

#     result = model.predict([[p4,p1,p2,p3 ]])

#     labels = {

#         0: "Customers with medium annual income and medium annual spend",

#         1: "Customers with high annual income but low annual spend",

#         2: "Customers with low annual income and low annual spend",


#         3: "Customers low annual income but high annual spend",

#         4: "Customers with high annual income and high annual spend"


#     }

#     prediction = {

#         'cluster': int(result),

#         'label': labels[int(result)]


#     }

#     return jsonify(prediction)


# if __name__ == '__main__':

#     app.run(debug=True)




# from flask import Flask, request, jsonify, render_template
# from flask_cors import CORS
# import pickle
# import numpy as np

# app = Flask(__name__)
# # CORS(app)  # Enable Cross-Origin Resource Sharing

# model = pickle.load(open('C:/Users/sharvari/Desktop/Turing/model.pkl', 'rb'))

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/predict', methods=['POST', 'GET'])
# # def predict():
# #     if request.method == 'POST':
# #         data = request.get_json()


# def predict():
#     if request.method == 'POST':
#         if request.content_type == 'application/json':
#             data = request.get_json()
#         elif request.content_type == 'application/x-www-form-urlencoded':
#             data = request.form
#         else:
#             return jsonify({'error': 'Invalid content type'})
#         print(data)

    
#         p1 = int(data['annual_income'])
#         p2 = int(data['spending_score'])
#         p3 = int(data['Age'])

#         result = model.predict([[ p1, p2, p3]])

#         labels = {
#             0: "Customers with medium annual income and medium annual spend",
#             1: "Customers with high annual income but low annual spend",
#             2: "Customers with low annual income and low annual spend",
#             3: "Customers with low annual income but high annual spend",
#             4: "Customers with high annual income and high annual spend"
#         }

#         prediction = {
#             'cluster': int(result),
#             'label': labels[int(result)]
#         }

#         return jsonify(prediction)
#     else:
#         # Handle GET request
#         # Add your code here if needed
#         pass


# if __name__ == '__main__':
#     app.run(debug=True)



# from flask import Flask, request, jsonify, render_template
# from flask_cors import CORS
# import pickle
# import numpy as np

# app = Flask(__name__)
# # CORS(app)  # Enable Cross-Origin Resource Sharing

# model = pickle.load(open('C:/Users/sharvari/Desktop/Turing/model.pkl', 'rb'))

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/predict', methods=['POST', 'GET'])
# def predict():
#     if request.method == 'POST':
#         data = request.get_json()
#         print(data,type(data))

        

        
#         p1 = int(data['annual_income'])
#         p2 = int(data['spending_score'])
#         p3 = int(data['Age'])

#         result = model.predict([[ p1, p2, p3]])

#         labels = {
#             0: " Segment 0: Customers with medium annual income and medium annual spend",
#             1: " Segment 1: Customers with high annual income but low annual spend",
#             2: " Segment 2: Customers with low annual income and low annual spend",
#             3: " Segment 3: Customers with low annual income but high annual spend",
#             4: " Segment 4: Customers with high annual income and high annual spend"
#         }

#         prediction = {
#             'cluster': int(result),
#             'label': labels[int(result)]
#         }

#         return render_template('result.html', cluster=prediction['cluster'], label=prediction['label'])

#     #     return jsonify(prediction)
#     # else:
#     #     # Handle GET request
#     #     # Add your code here if needed
#     #     pass 


# if __name__ == '__main__':
#     app.run(debug=True) 



# from flask import Flask, request, jsonify, render_template
# from flask_cors import CORS
# import pickle
# import numpy as np

# app = Flask(__name__)
# # CORS(app)  # Enable Cross-Origin Resource Sharing

# model = pickle.load(open('C:/Users/sharvari/Desktop/Turing/model.pkl', 'rb'))

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/result', methods=['POST'])
# def result():
#     try:
#     # if request.method == 'POST':
#         data = request.form
#         # print(data,type(data))

        

        
#         p1 = int(data['annual_income'])
#         p2 = int(data['spending_score'])
#         p3 = int(data['Age'])
#     except KeyError as e:
#         # Handle missing key error
#         return jsonify(error=str(e)), 400

#         result = model.predict([[ p1, p2, p3]])

#         labels = {
#             0: " Segment 0: Customers with medium annual income and medium annual spend",
#             1: " Segment 1: Customers with high annual income but low annual spend",
#             2: " Segment 2: Customers with low annual income and low annual spend",
#             3: " Segment 3: Customers with low annual income but high annual spend",
#             4: " Segment 4: Customers with high annual income and high annual spend"
#         }

#         prediction = {
#             'cluster': int(result),
#             'label': labels[int(result)]
#         }

#         return render_template('result.html', cluster=prediction['cluster'], label=prediction['label'])

#     #     return jsonify(prediction)
#     # else:
#     #     # Handle GET request
#     #     # Add your code here if needed
#     #     pass 


# if __name__ == '__main__':

#     app.run(debug=True,port=7000) 

from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
# CORS(app)  # Enable Cross-Origin Resource Sharing

model = pickle.load(open('C:/Users/sharvari/Desktop/Turing/model.pkl', 'rb'))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST', 'GET'])
def predict():
    if request.method == 'POST':
        data = request.get_json()
        print(data,type(data))

        

        
        p1 = int(data['annual_income'])
        p2 = int(data['spending_score'])
        p3 = int(data['Age'])

        result = model.predict([[ p1, p2, p3]])

        labels = {
            0: " Target groups: middle-to-high income and high spenders(should be targeted by the mall)",
            1: " Standard group:middle and middle spenders",
            2: "Careless group :low income but high spenders(should be avoided because of possible credit risk)",
            3: " Careful: High income but low spenders",
            4: " Sensible: low income and low spenders"
        }

        prediction = {
            'cluster': int(result),
            'label': labels[int(result)]
        }

        return jsonify(prediction)
    else:
        # Handle GET request
        # Add your code here if needed
        pass 


if __name__ == '__main__':
    app.run(debug=True) 
