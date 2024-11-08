# importing libraries
import cv2


def app():
    # Reading the image
    img = cv2.imread("car-img.jpeg")


    # Convert the image to greyscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)


if __name__ == "__main__":
    app()