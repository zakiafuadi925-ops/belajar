uniq_number = [ 1,1,1,1,1,1,2,1,1,1 ] 
uniq_number2 = [ 2,2,2,2,2,2,5,2,2,2 ]
data = uniq_number
data2 = uniq_number2
def angka_unik(data):
    for x in data:
        if data.count(x) == 1:
            return x
        
print(angka_unik(data))
print(angka_unik(data2))
            
