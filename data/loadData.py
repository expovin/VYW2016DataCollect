import pymongo
import csv
from sys import argv
import inspect
import time

LogLvl=['FATAL','WARNING','INFO','DEBUG','TRACE']
DefLevel = 4

connection = pymongo.MongoClient() # Connect to the local  Server

def logOut(level,fileName,message):

    lvl = DefLevel

    if(level <= lvl):
        curframe = inspect.currentframe()
        calframe = inspect.getouterframes(curframe, 2)
        callerFunc = calframe[1][3]

        date_time = time.strftime("%d/%m/%Y %X")
        print(date_time+"\t"+LogLvl[level]+"\t"+fileName+"\t"+callerFunc+"\t"+message)



def caricaDati(nomeFile):
    db = connection.VYW2016.users

    logOut(2,"loadData","Eliminazione documenti precedenti")
    db.remove()
    
    count = 0

    logOut(2,"loadData","Funzione istanziata con parametro "+nomeFile)

    with open (nomeFile, 'rb') as dataFile:
    	logOut(3,"loadData","File aperto correttamente in lettura")
    	spamreader = csv.reader(dataFile, delimiter=';')
    	for row in spamreader:
    		count+=1
    		#logOut(4,"loadData","Letta riga "+str(row))
    		#print (row)
    		if(count > 1):
    		    doc = {
    		        "shortCode" : str(count),
    		        "QRCode" : str(count),
    		        "CMSourceSite" : row[0],
    		        "MemberType" : row[1],
    		        "MemberStatus" : row[2],
    		        "ContactId" : row[3],
    		        "MemberFirstAssociatedDate" : row[4],
    		        "MemberStatusUpdateDate" : row[5],
    		        "Sal" : row[8],
    		        "firstname" : row[9],
    		        "lastname" : row[10],
    		        "Company" : row[11],
    		        "Phone" : row[12],
    		        "Email" : row[13],
    		        "ContactOwner" : row[14],
    		        "Account":row[15],
    		        "Address" : {
    		            "Line1" : row[16],
    		            "Line2" : row[17],
    		            "Line3" : row[18],
    		            "Line4" : row[19],
    		            "City" : row[20],
    		            "Prov" : row[21],
    		            "CAP" : row[22],
    		            "Country" : row[23]
    		        },
    		        "CampignName" : row[24]
    		    }

                try:
                    db.insert(doc)
                except:
                    logOut(1,"loadData","Errore nel caricare il recore "+str(row))


if __name__ == "__main__":
    logOut(2,"loadData","Parametri di input "+str(argv))
    caricaDati(argv[1])