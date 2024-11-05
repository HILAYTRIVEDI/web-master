# Face Detection with OpenCV

This project implements real-time face detection using OpenCV and Haar Cascade Classifier. It captures live video through a webcam, processes each frame to detect faces, and highlights them with bounding boxes. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [Algorithm Explanation](#algorithm-explanation)
- [References](#references)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/face-detection-opencv.git
   cd face-detection-opencv
   ```

2. Install the required libraries:
   ```bash
   pip install opencv-python
   ```

3. Download the Haar Cascade XML file:
   - You can get the pre-trained [haarcascade_frontalface_default.xml](https://github.com/opencv/opencv/blob/master/data/haarcascades/haarcascade_frontalface_default.xml) file from OpenCV’s GitHub repository. Save it in the project folder.

---

## Usage

To start the face detection application, run:
```bash
python face_detection.py
```

Press **'q'** to quit the application.

---

## Code Explanation

The program initializes by loading a Haar Cascade classifier from an XML file and opens a video stream from the default webcam. For each frame captured:

1. It converts the frame to grayscale to improve processing speed and accuracy.
2. The classifier then scans the image, detecting faces as rectangular coordinates.
3. Each detected face is highlighted with a green bounding box.
4. The application exits when the 'q' key is pressed.

## Algorithm Explanation

The face detection algorithm leverages the **Haar Cascade Classifier** provided by OpenCV. Here’s a technical breakdown of its workings:

### 1. Haar Feature-Based Cascade Classifier
The Haar Cascade Classifier is based on machine learning, where a classifier is trained with a set of positive images (faces) and negative images (non-faces). The algorithm utilizes the **Haar-like features**—patterns of rectangles that capture the contrast between different regions of an image (e.g., light and dark areas near the eyes and nose).

### 2. Feature Extraction
Each Haar feature examines specific regions in the image, calculating the pixel intensity differences. For example:
   - **Edge features** can detect changes in pixel intensity at edges of the face.
   - **Line features** focus on the bridge of the nose or eyes.

### 3. Integral Image Representation
To optimize feature extraction, the algorithm uses an **integral image** representation. This technique drastically reduces the computation time, allowing the classifier to quickly compute sums of pixel intensities over rectangular areas, essential for real-time processing.

### 4. Cascade of Classifiers
The Haar Cascade Classifier organizes weak classifiers into a series of stages, each filtering out non-face regions. This cascading approach enables real-time detection, as each stage can reject non-facial regions with minimal computation. Only regions that pass all stages are classified as faces.

### 5. Multi-Scale Detection
The `detectMultiScale` method allows the detection of faces of various sizes by scaling the detection window to accommodate faces at different distances. This is crucial for robust face detection in real-world applications.

## References

- OpenCV documentation: https://docs.opencv.org/
- Viola, P., & Jones, M. (2001). Rapid Object Detection Using a Boosted Cascade of Simple Features.
