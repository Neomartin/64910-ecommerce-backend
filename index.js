const server = require('./app');
const mongoose = require('mongoose')

// mongodb+srv://neomartinr:<password>@eit-64910.fdtymff.mongodb.net/

async function main() {
    try {
        // Nos conectamos a la base de datos
        await mongoose.connect("mongodb+srv://neomartinr:Alfabeta!@eit-64910.fdtymff.mongodb.net/ecommerce")
        console.log(`CONEXIÓN A LA DB CORRECTA!`)

        // Ponemos nuestro servidor express a escuchar
        server.listen(3000, () => {
            console.log('Server is running at port 3000');
        });
    } catch (error) {
        console.log(error)
    }

}

main()






