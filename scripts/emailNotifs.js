/**
 * emailNotifs.js
 * 
 * Script that runs daily to email users who have an upcoming task due on that day.
 */

const { Client } = require("pg");
const nodemailer = require("nodemailer");
const { google } = require('googleapis');
const dayjs = require("dayjs");
const { OAuth2 } = google.auth;

const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

// grab authentication configs from process
const {
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
  DATABASE_URL
} = process.env;

const oauth2Client = new OAuth2(
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_PLAYGROUND
);

/**
 * function: getTargets()
 * this function queries the db to get users who have a task due today
 * Note: db client configs are defined on process
 */

const getTargets = async () => {
  const client = new Client({
    connectionString: DATABASE_URL,
    ssl: true
  });
  await client.connect();
  
  const res = await client.query(`
    SELECT 
      "users"."email",
      "users"."username",
      "assignments"."task",
      "assignments"."dueDate"
    FROM "users"
    JOIN "ladders"
    ON "users"."id" = "ladders"."userId"
    JOIN "assignments"
    ON "ladders"."id" = "assignments"."ladderId"
    WHERE 
      "users"."emailNotifications" = TRUE
      AND "assignments"."completed" = FALSE
      AND DATE("assignments"."dueDate") = DATE(NOW())
  `);
  
  await client.end();

  return res.rows
}

/**
 * function: emailTargets(targets)
 * this function creates a smtp transporter object to email each target in the targets array
 */
const emailTargets = async (targets) => {
  if (targets.length) {
    oauth2Client.setCredentials({
      refresh_token: OAUTH_REFRESH_TOKEN,
    });
  
    const accessToken = oauth2Client.getAccessToken();
  
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          type: 'OAuth2',
          user: SENDER_EMAIL_ADDRESS,
          clientId: OAUTH_CLIENT_ID,
          clientSecret: OAUTH_CLIENT_SECRET,
          refreshToken: OAUTH_REFRESH_TOKEN,
          accessToken: accessToken
      }
    });
    for (let target of targets) {
      const mailOptions = {
        from: `${SENDER_EMAIL_ADDRESS} <${SENDER_EMAIL_ADDRESS}>`,
        to: target.email,
        subject: 'You have a Roar task due soon!',
        html: `
          <p>Hello <b>${target.username}</b> - it's your friends at Roar!</p>
          <p>We just wanted to remind you that you have a task due soon!</p>
          <p>Task: ${target.task}</p>
          <p>Due Date: ${dayjs(target.dueDate).format("ddd, MMM DD, YYYY")}</p>
          <p><a href="https://roar.dev">Log in to Roar</a></p>
        `
      }
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
    }
  } else {
    console.log('No notifications to send.')
  }
}

getTargets()
  .then(targets => emailTargets(targets))
  .catch(err => {
    throw new Error(err)
  })
