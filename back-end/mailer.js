const nodemailer = require('nodemailer');

const sendMail = (email, fullName, password) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'tokopedei.taraman5@gmail.com',
          pass: process.env.MAILER_PASS
        }
      });

    const mailOptions = {
        from: 'Tokopedei Online <tokopedei.taraman5@gmail.com>',
        to: email,
        subject: 'Tokopedei Online Password Reset',
        html: 
        `
        <head>
            <style>
                body {
                    font-size: 16px;
                    font-family: Arial, Helvetica, sans-serif;
                    color: #333;
                }

                main { 
                    display: flex; 
                    justify-content: center;
                }

                section {
                    padding: 15px; width: 500px;
                    background-color: #f1f0ed; 
                }

                div {
                    padding: 15px; 
                    background-color: #fff; 
                }

                .password-box {
                    display: inline-block;
                    padding: 5px;
                    border-radius: 4px;
                    border: 1px dashed #ccc;
                    background-color: #f1f1f1;
                }
        
                .password-box p { 
                    padding: 0; 
                    margin: 0;
                    color: #555;
                } 

                figure {
                    margin: 0 auto;
                    padding: 0;
                    width: 200px;
                }
        
                figure img { 
                    display: inline-block;
                    width: 100%;
                    height: auto;
                }
            </style>
        </head>

        <body>
            <main>
                <section>
                    <div>
                        <figure>
                            <img src='https://res.cloudinary.com/itamarrosenblum/image/upload/v1623801885/shoppingProject/mazon-online-logo_copy_v3tm42.png' alt='Mazon Online Logo' />
                        </figure>

                        <h1>Password Reset</h1> 
                        <p>Halo kakak! 👋 <strong>${fullName}</strong>,</p>
            
                        <p>Kami mengirimkan e-mail ini karena Anda meminta pengaturan ulang kata sandi.</p>

                        <p>Ketikkan password baru anda dibawah ini:</p>

                        <div class='password-box'>
                            <p>${password}</p>
                        </div>
                                        
                        <p><strong>— Tim Tokopedei Online</strong></p>
                    </div>
                </section>
            </main>
        </body>
        `
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email send:' + info.response);
        }
    });
}

module.exports = { sendMail };