# DR-Detection

Diabetic retinopathy (DR) is a significant complication of diabetes and a leading cause of blindness worldwide. Early detection and timely intervention are crucial to prevent vision loss and reduce the burden on healthcare systems. However, manual screening for DR is time-consuming, subjective, and often inaccessible, particularly in underserved regions with limited healthcare infrastructure.
In recent years, advancements in deep learning and computer vision have shown promise in automating DR screening through the analysis of fundus images. Convolutional neural networks (CNNs) have emerged as powerful tools for image classification and object detection, offering the potential to enhance the efficiency and accuracy of DR diagnosis. This project aims to develop a web application utilizing a dataset sourced from Kaggle to detect diabetic retinopathy. Leveraging Convolutional Neural Network (CNN), the application employs image recognition techniques to analyze retinal images and classify diabetic retinopathy. The implementation involves preprocessing the dataset, model training, and integrating the algorithms into a user-friendly web interface. To enhance accuracy and efficiency, exploring ensemble method of CNN could potentially improve the detection capabilities. Additionally, incorporating explainable AI techniques may offer insights into the model’s decision-making process, increasing interpretability and trust in the application’s results. This project seeks to provide an accessible and reliable tool for early detection of diabetic retinopathy, potentially aiding in timely medical interventions for affected individuals


PROBLEM STATEMENT


India is said to be the diabetic capital of the world by 2030 with over 80 million people affected by it. Unfortunately, more than 2/3rds of them are from the “subaltern”. In the healthcare field, the treatment of diseases is more effective when detected at an early stage. Diabetes is a disease that increases the amount of glucose in the blood caused by a lack of insulin. It affects 425 million adults worldwide. Diabetes affects the retina, heart, nerves, and kidneys.
Ophthalmologists used to diagnose eye problems manually, which took a long time. Diabetes is a long-term illness that interferes with our body’s average capacity to digest food. Complications of diabetes include diabetic retinopathy (eye damage), In primarily elderly populations, eye problems are the leading cause of blindness. 
If identified early, this is a blindness which can be avoided.


SYSTEM DESIGN


![image](https://github.com/user-attachments/assets/4a18fce0-e369-405d-84c3-8da894a1ed19)

Setting Up Development Environment: 


Install Python and required libraries (Flask, TensorFlow, Keras, NumPy, PIL). 


Create a virtual environment to isolate the project dependencies.


Developing the Web Application:

Design and implement the frontend interface using HTML, CSS, and JavaScript. 

Develop the backend server using Flask and implement the prediction logic.

Train and save the machine learning model using TensorFlow and Keras.


Testing:

Test the functionality of each component individually. 

Perform integration testing to ensure seamless communication between frontend, backend, and machine learning model. 

Validate the prediction accuracy of the machine learning model using test datasets.


Deployment:

Deploy the web application on a server or hosting platform (e.g., Heroku, AWS, or Google Cloud).

Set up a domain name and configure DNS settings if necessary.

Ensure security measures are in place to protect user data and prevent unauthorized access


OUTCOME OF THE PROJECT: 

Web Page Interface for detection 
![image](https://github.com/user-attachments/assets/0f18fbdc-8c77-41a9-ab34-94855f9a4c4b)
Dropdown menu for image upload
![image](https://github.com/user-attachments/assets/fdfad6bf-9271-4211-a61a-87de2744696c)
Selecting of image for detection
![image](https://github.com/user-attachments/assets/6bd83965-7bc1-4908-b3c7-480641337b67)
Result of detection with uploaded image
![image](https://github.com/user-attachments/assets/6bacabb3-99fb-4483-a843-b07432bab941)

CONCLUSION
Automating DR detection via CNNs bears substantial significance. Early detection and prompt treatment to prevent vision impairment. Potential enhancement of healthcare accessibility through the web-based prediction platform. As we culminate this major endeavor, we stand proud of our collaborative efforts, from dataset curation to model training and app development. 
This app embodies the promise of artificial intelligence in healthcare, offering a seamless, user-friendly interface that empowers individuals and healthcare professionals with accurate, timely insights into retinal health. 

FUTURE SCOPE OF PROJECT: 
1. Data Augmentation: Expanding the diversity and size of the training dataset through data augmentation techniques can improve the model's robustness and generalizability. 
2. Explainable AI: Integrating explainable AI techniques to enhance the interpretability of the model's predictions, providing clinicians with actionable insights. 
3. Transfer Learning: Leveraging pre-trained models and transfer learning approaches can accelerate model development and improve performance, especially in scenarios with limited labeled data. 
4. Real-time Deployment: Optimizing the model architecture and inference pipeline for real-time performance to enable seamless integration into existing clinical workflows. 
5. Multimodal Fusion: Incorporating additional imaging modalities or clinical data sources to augment the model's predictive capabilities and enable more comprehensive disease assessment. 
6. Mobile Application: Can be made available in regard to the future.

