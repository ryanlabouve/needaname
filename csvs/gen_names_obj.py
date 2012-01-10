#Takes all .csv files and creates a JSON object with the filename as the object
#property name and the contents, as an array, as the value of the given property

import glob, json, csv

output = open("names_data.js", "w")
try:
	output.write("names = %s" % json.JSONEncoder().encode({filename.split('.')[0] : [name[0].title() for name in csv.reader(open(filename), dialect=csv.excel)] for filename in glob.glob("*.csv")}))
finally:
	output.close()