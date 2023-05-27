def compare_text(input_text):
    transfer = ["transfer", "trimit", "da-i"] # vreau sa fac un transfer catre
    programare = "programare" # programare in sucursala
    sold = "sold" # ce sold am
    # adaug = ["depun", "adaug"]

    buget = "buget" #["Care este suma minima de care am nevoie luna urmatoare?"]
    # bazat pe luna trecuta
    ok = 1
    for word in transfer:
        if word in input_text:
            print("Transferul s-a efectuat cu succes\n")
            ok = 0

    if ok:
        # for word in adaug:
        #     if word in input_text:
        #         print("Transferul s-a efectuat cu succes\n")
        #         ok = 0
        if sold in input_text:
            print("Soldul tau este 500 RON\n")

        elif buget in input_text:
            print("Bugetul tau este 200 RON\n")

        elif programare in input_text:
            print("")


# Example usage
input_text = input("Enter a text: ")
compare_text(input_text)