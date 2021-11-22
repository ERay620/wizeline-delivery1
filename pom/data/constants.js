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