import xlsx from 'node-xlsx'

import dotenv from 'dotenv'
dotenv.config();


export const URLS = {
    BASE_URL:'https://todoist.com/'
}

export const CREDENTIALS = {
    STANDART_USER: {
        MYUSERNAME: process.env.MYUSERNAME,
        PASSWORD: process.env.PASSWORD
    }  

}




const excelFile = xlsx.parse('./pom/data/testData.xlsx')

const excelSheet = excelFile.find(sheets => sheets.name == 'data')

const excelSheetData = excelSheet.data


const headers = excelSheetData.shift()


//console.log(excelSheet)



export const dataSet = excelSheetData.map((row) => {

   const user = {};

   row.forEach((data, idx) => user[headers[idx]] = data);
   return user;

});

//console.log(dataSet)



//--------NEGATIVE DATA---------------------------

const excelFile2 = xlsx.parse('./pom/data/negativeTestData.xlsx')
const excelSheet2 = excelFile2.find(sheets => sheets.name == 'data')

const excelSheetNegativeData = excelSheet2.data


const myheader = excelSheetNegativeData.shift()



export const negativeDataSet = excelSheetNegativeData.map((row) => {

   const user = {};

   row.forEach((data, idx) => user[myheader[idx]] = data);
   return user;

});