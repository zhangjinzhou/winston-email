import * as winston from "winston";
import * as Transport from "winston-transport";
import * as nodemailer from "nodemailer";

interface EmailTransportOptions extends Transport.TransportStreamOptions {
    to: string;
    from: string;
    username: string;
    host: string;
    password: string;
    subject?: string;
    secure?: boolean;
};

export class Email extends Transport {
    constructor(options: EmailTransportOptions) {
        super(options);

        this.to = options.to;
        this.from = options.from;
        this.subject = options.subject || "Winston Logger Error";     
        this.transporter = nodemailer.createTransport({
            host: options.host,
            auth: {
                user: options.username,
                pass: options.password
            },
            secure: options.secure || false
        });
    };

    private to: string;
    private from: string;
    private subject: string;
    private transporter: nodemailer.Transporter;


    log(info: any) {
        // Send email with info
        console.log(info);

        const options: nodemailer.SendMailOptions = {
            from: this.from,
            to: this.to,
            subject: this.subject,
            html: info.message
        };
        this.transporter.sendMail(options, (error) => {
            console.log(error);
        });
    };
}