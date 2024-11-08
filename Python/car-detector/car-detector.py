# importing libraries
import cv2


def app():
    # Reading the image
    img = cv2.imread("car-img.jpg")

    # Import the cascade classifier
    car_cascade = cv2.CascadeClassifier("cars.xml")

    # Convert the image to grayscale
    gray_image = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Detect the file from the image
    cars = car_cascade.detectMultiScale(gray_image, 1.3, 5)

    # Draw the rectangles around the cars
    for (x, y, w, h) in cars:
        cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # Display the image
    cv2.imshow("Car Detector", img)
    cv2.waitKey(0)


if __name__ == "__main__":
    app()