import nodemailer from 'nodemailer';

const emailPass = 'virtue07!';

const transporter = nodemailer.createTransport({
  //   host: 'smtp.ionos.de',
  //   port: 25,
  servie: 'hotmail',
  auth: {
    user: 'saiafonua@hotmail.com',
    pass: emailPass,
  },
});
// //[1]

// export default async (req, res) => {
//     console.log('req.body;', req.body)
//   const { senderMail, name, content, recipientMail } = req.body;
//   //[2]

//   // Check if fields are all filled
//   if (
//     senderMail === '' ||
//     name === '' ||
//     content === '' ||
//     recipientMail === ''
//   ) {
//     res.status(403).send('');
//     return;
//   }
//   //[3]

//   const mailerRes = await mailer({
//     senderMail,
//     name,
//     text: content,
//     recipientMail,
//   });
//   res.send(mailerRes);
//   //[4]
// };

// const mailer = ({ senderMail, name, text, recipientMail }) => {
//   const from =
//     name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
//   const message = {
//     from,
//     to: `${recipientMail}`,
//     subject: `New message from ${from}`,
//     text,
//     replyTo: from,
//   };
//   //[5]

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(message, (error, info) =>
//       error ? reject(error) : resolve(info)
//     );
//   });
//   //[6]
// };

export default async function handler(req, res) {
  console.log('req.body', req.body);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ name: 'John Doe' }));
}
