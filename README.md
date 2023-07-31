# 🚒 FirePredictionJS

FirePredictionJS is a project that utilizes a machine learning model to predict wildfires. This project focuses on the deployment of the model using TensorFlow.js, allowing users to run the prediction locally on their machines. You can try out the application [here](https://fire-prediction-js.onrender.com/)! You may also follow the guide below in order to compile the application on your own machine using a local server.

## Project Structure

The FirePredictionJS project is organized into two main folders:

1. [**local-server**](local-server): This folder contains the server-side code responsible for serving the prediction model and handling requests from the client. It requires Node.js and Express to run.

2. [**static**](static): This folder contains the client-side code, including HTML, CSS, and JavaScript files necessary to create a user interface for making predictions. It also includes the converted TensorFlow.js model.

## How to get it running on your machine

To get started with FirePredictionJS, follow these steps:

1. Clone or download the project repository.

2. **Server Setup**:
   - Ensure that Node.js is installed on your machine. You can download it from the official Node.js website: [nodejs.org](https://nodejs.org).
   - Navigate to the `local-server` folder in your terminal.
   - Install the required dependencies by running the following command:
     ```
     npm install
     ```

3. **Model Download**:
   - Download the converted TensorFlow.js model file from the following location: [Download Model](static/converted_model)
   - Place the downloaded model file in the `static` folder of the project.

4. **Client Setup**:
   - Open a new terminal window and navigate to the project's root directory.
   - Navigate to the `static` folder by running the following command:
     ```
     cd static
     ```
   - Install any necessary client-side dependencies by running the following command:
     ```
     npm install
     ```

5. **Backend Configuration**:
   - In the terminal, navigate to the `static` folder.
   - Modify the JavaScript file necessary for the backend using Browserify. Run the following command:
     ```
     browserify backend.js -o dist/backend.js
     ```
   - This will generate an updated JavaScript file in the `dist` folder.

6. **Launching the Local Server**:
   - In the terminal, navigate back to the `local-server` folder.
   - Start the local server by running the following command:
     ```
     node server.js
     ```
   - The server should now be running and listening for requests on a specified port (usually port 3000, I use 32 in my code).

7. **Accessing the User Interface**:
   - Open a web browser and enter the following URL:
     ```
     http://localhost:32
     ```
   - The FirePredictionJS user interface should now be accessible in your browser.

## Usage

Once the user interface is loaded in the browser, you can use it to make predictions on wildfires. Follow the instructions provided on the page to input the necessary data and initiate the prediction process. For test data, it may be useful to use the test folder in [this](https://www.kaggle.com/datasets/abdelghaniaaba/wildfire-prediction-dataset) dataset to get an idea of the models abilities. You can find the python script used to develop the model [here.](https://github.com/snowjacob/python-scripts/tree/main/wildfire_prediction)

## Contributing

Contributions to FirePredictionJS are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request or open an issue on the project repository.

## Acknowledgements:

Special thanks to [deeplizard](https://www.youtube.com/@deeplizard/featured) for providing inspiration and helpful resources throughout the development of the FirePredictionJS project. Their valuable content and tutorials greatly contributed to the success of this project.

---

*Note: This README file provides an overview of the FirePredictionJS project and instructions for setting it up and using it. For more detailed information and code implementation, please refer to the project's source code and documentation.*
