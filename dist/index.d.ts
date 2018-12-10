import * as Transport from "winston-transport";
interface EmailTransportOptions extends Transport.TransportStreamOptions {
    to: string;
    from: string;
    username: string;
    host: string;
    password: string;
    subject: string;
    secure: boolean;
}
export declare class Email extends Transport {
    constructor(options: EmailTransportOptions);
    private to;
    private from;
    private subject;
    private transporter;
    log(info: any): void;
}
export {};
