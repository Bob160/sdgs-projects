const express = require('express')
const app = express()
const PORT = 8000

const projects2021 = {

    '23144': {
        'ergpnumb': 23144,
        'title': 'Construction of 2-blocks of classrooms in Bwari, FCT',
        'state': 'FCT',
        'localGovt': 'Bwari',
        'amount': 'NGN 11000000'
    },
    '23145': {
        'ergpnumb': 23145,
        'title': 'Construction of motorised borehole in Dekina LGA, Kogi State',
        'state': 'Kogi',
        'localGovt': 'Dekina',
        'amount': 'NGN 11666666'
    },
    'unknown': {
        'ergpnumb': 'unknown',
        'title': 'unknown',
        'state': 'unknown',
        'localGovt': 'unknown',
        'amount': '0'
    }
}

//Get request and find file
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:ergp', (request, response) => {
    const ergpNumb = request.params.ergp.toLowerCase()
    //console.log(projects2021[ergpNumb].title)
    if(projects2021[ergpNumb]) {
        response.json(projects2021[ergpNumb])
    }else {
        response.json(projects2021['unknown'])
    }

})

//Set the app to listen to Port 8000
app.listen(PORT, () => {
    console.log(`The Server is running on port ${PORT}! Imma go catch it!`)
}) 