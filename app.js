import express from 'express';
const app = express()
const port = 8000
import 'dotenv/config';


'use strict'
/** @module write
 * Writes a data point to InfluxDB using the Javascript client library with Node.js.
**/

import { InfluxDB, Point } from '@influxdata/influxdb-client'

/** Environment variables **/
const url = process.env.INFLUX_URL
const token = process.env.INFLUX_TOKEN
const org = process.env.INFLUX_ORG
const bucket = process.env.INFLUX_BUCKET

/**
 * Instantiate the InfluxDB client
 * with a configuration object.
 **/
const influxDB = new InfluxDB({ url, token })

/**
 * Create a write client from the getWriteApi method.
 * Provide your `org` and `bucket`.
 **/
const writeApi = influxDB.getWriteApi(org, bucket)

/**
 * Apply default tags to all points.
 **/
writeApi.useDefaultTags({ region: 'west' })


app.post('/api/temperature', (req, res) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
        const frame = JSON.parse(data);
        const code = (parseInt("0x" + frame.data.substr(0,2)))/10;
        const value = (parseInt("0x0" + frame.data.substr(2, 4)))/10;
        let alert = "";
        if (frame.data.length > 6) {
            alert = (parseInt("0x" + frame.data.substr(6, 4)))/10
        };

        const point1 = new Point('temperature')
        .tag('sensor_id', 'TLM01')
        .floatField('temperature', value)
        .intField('code', code)
        writeApi.writePoint(point1)
        writeApi.flush().then(function () {
          console.log("WRITE FINISHED");
        });
        
    });
})

app.post('/api/humidity', (req, res) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      const frame = JSON.parse(data);
      const code = (parseInt("0x" + frame.data.substr(0,2)))/10;
      const value = (parseInt("0x0" + frame.data.substr(2, 4)))/10;
      let alert = "";
      if (frame.data.length > 6) {
       alert = (parseInt("0x" + frame.data.substr(6, 4)))/10
    };

    const point1 = new Point('humidity')
        .tag('sensor_id', 'TLM01')
        .floatField('humidity', value)
        .intField('code', code)
        writeApi.writePoint(point1)
        writeApi.flush().then(function () {
          console.log("WRITE FINISHED");
        });
        
    });

    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
