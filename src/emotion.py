import cv2
from fer import FER

# Încarcă imaginea
image_path = "./laur_fericit.jpg"
image = cv2.imread(image_path)

# Inițializează detectorul de fețe și de emoții
detector = FER(mtcnn=True)

# Detectează fețele și emoțiile
result = detector.detect_emotions(image)

# Extrage emoțiile detectate pentru fiecare față
emotions = [face["emotions"] for face in result]

# Parcurge fiecare față detectată și afișează emoția
for i, emotion in enumerate(emotions):
    print(f"Emoția persoanei {i+1}:")
    print(emotion)


