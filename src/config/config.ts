export default {
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://database/jwttstutorial',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
      }
}