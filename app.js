// requerir
const express = require('express')

// instanciar
const app = express()

// setup de recursos estáticos y vistas
app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

// enrutar

// home page
app.get('/', (req, res) => {
    res.render('home-page')
})

// about
app.get('/about', (req, res) => {

    const laKim = {
        name: 'La kim',
        lastName: 'Kardashian',
        parents: ['El Robert y', 'La Kris'],
        sisters: ['La Kylie', 'La Kendall', 'La Kourtney', 'La Khloe'],
        description: 'Soy super rica y super famosa, y no hago nada de nada. ¡Qué duro es ser yo!'
    }

    res.render('about-page', laKim)

})

//works
app.get('/sisters', (req, res) => {

    const sisters = [
        {
            name: 'La Kylie',
            lastName: 'Jenner',
            description: 'Vendo makeup',
            img: '/img/kylie.jpeg'
        },
        {
            name: 'La Kendall',
            lastName: 'Jenner',
            description: 'Soy una super modelo, osea',
            img: '/img/kendall.jpeg'
        },
        {
            name: 'La Kourtney',
            lastName: 'Kardashian',
            description: 'Soy la oveja negra de la family',
            img: '/img/kourtney.jpeg'
        },
        {
            name: 'La Khloe',
            lastName: 'Kardashian',
            description: 'Estuve en la cárcel',
            img: '/img/khloe.jpg'
        }
    ]

    res.render('sisters-page', { sisters })
})


// listen
app.listen(5005, () => console.log('Servidor levantado en 5005'))