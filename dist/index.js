"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Transport = require("winston-transport");
const nodemailer = require("nodemailer");
;
class Email extends Transport {
    constructor(options) {
        super(options);
        this.to = options.to;
        this.from = options.from;
        this.subject = options.subject;
        this.transporter = nodemailer.createTransport({
            host: options.host,
            auth: {
                user: options.username,
                pass: options.password
            },
            secure: options.secure
        });
    }
    ;
    log(info) {
        // Send email with info
        console.log(info);
        const options = {
            from: this.from,
            to: this.to,
            subject: this.subject,
            html: info
        };
        this.transporter.sendMail(options, (error) => {
            console.log(error);
        });
    }
    ;
}
exports.Email = Email;
