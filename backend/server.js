require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || '';
const router = require('./src/route/student.route');
const { z } = require('zod');
const envSchema = require('./src/schema/env.schema');
const ApiError = require('./utils/apiError');
app.use(express.json());
app.use(cors());
app.use(router);

function validateEnvVaribles() {
      try {
            const runTime = process.env;
            envSchema.parse(runTime);
            console.log("Env varibles validation completed");
      } catch (error) {
            console.log("Env varibles validation failed");
            if (error instanceof z) {
                  console.log("Missing invalid varibles");
            }
      }
};

app.get('*', async (req, res) => {
      res.send('404 not page');
});

async function connectToDatabase() {
      try {
            const DB = process.env.DATABASE
            await mongoose.connect(DB, {
                  useNewUrlParser: true
            });
            console.log("Connected to MongoDB")
      } catch (error) {
            console.log("Error while connecting to MongoDB: ", error);
      }
};

app.use((err, req, res, next) => {
      if (err instanceof ApiError) {
            res.status(err.statusCode).json({
                  status: "fail",
                  message: err.message
            })
      }
});

app.get('*', (req, res, next) => {
      res.send(ApiError.notFound());
});

app.listen(PORT, () => {
      validateEnvVaribles();
      connectToDatabase();
      console.log('server is running on port:', PORT);
});