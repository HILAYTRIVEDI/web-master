import cv2

from random import randrange

def app():

    # Load the trained data
    trained_faced_data = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

    # Open the webcam
    web_cam = cv2.VideoCapture(0)

    while True:
        # Read the webcam
        ret, img = web_cam.read()

        if not ret:
            break

        # Convert the image to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        # Detect faces
        faces_coordinates = trained_faced_data.detectMultiScale(gray) # it returns a list of rectangles of faces

        for (x, y, w, h) in faces_coordinates:
            cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)

        # Show the image
        cv2.imshow('img', img)
        cv2.waitKey(1)
        
        # Break the loop if the user presses the 'q' key
        if cv2.waitKey(1) == ord('q'):
            break


    # Release the webcam
    web_cam.release()

if __name__ == "__main__":
    app()