module.exports ={
    server: process.env.PORT || 3000
database: {
    connection: process.env.connection || 'mongodb://127.0.0.1:27017'
}
auth:{
    secret: 'minha super secret'
}
}
