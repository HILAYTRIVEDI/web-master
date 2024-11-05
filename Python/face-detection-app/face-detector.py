import cv2

def app():

    # Load the trained data
    trained_faced_data = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

    # Read the image
    img = cv2.imread('rdj.jpg')

    # Convert the image to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Show the image
    cv2.imshow('img', gray)
    cv2.waitKey()

if __name__ == "__main__":
    app()