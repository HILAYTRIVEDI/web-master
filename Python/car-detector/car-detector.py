# importing libraries
import cv2


def app():
    # Reading the image
    # img = cv2.imread("car-img.jpg")

    # read video from the local video file
    cap = cv2.VideoCapture("cars-video.mp4")

    # Check if the video is opened
    if not cap.isOpened():
        print("Error opening video file")
        exit()

    # Import the cascade classifier
    car_cascade = cv2.CascadeClassifier("cars.xml")

    while True:
        # Capture frame-by-frame
        ret, frame = cap.read()

        # Converting to grayscale
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Detecting the car
        cars = car_cascade.detectMultiScale(gray, 1.3, 5)

        # Drawing the bounding boxes
        for (x, y, w, h) in cars:
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

        # Displaying the output
        cv2.imshow("Frame", frame)

        # Press 'q' to quit
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

    # Release the video
    cap.release()


if __name__ == "__main__":
    app()