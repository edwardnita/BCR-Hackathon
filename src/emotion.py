import cv2
from fer import FER

# Încarcă imaginea
image_path = "./laur_fericit.jpg"
image = cv2.imread(image_path)

# Inițializează detectorul de fețe și de emoții
detector = FER(mtcnn=True)

# Detectează fețele și emoțiile
result = detector.detect_emotions(image)

# Parcurge fiecare față detectată și afișează emoția cu scorul cel mai mare
for i, face in enumerate(result):
    emotions = face["emotions"]
    max_emotion = max(emotions, key=emotions.get)
    print(f"Emoția persoanei {i+1}: {max_emotion}")
