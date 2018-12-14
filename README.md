# winston-email
Winston transport to send email.

## Description
This library creates winston transport to send email. It fits winston 3.
Support Typescript. No need to download types.
Use nodemailer to send email.

## Sample use

```
import * as winston from "winston"
import * as winstonEmail from "winston-email2"

const logger = winston.createLogger({
    transports: [
        new winstonEmail.Email({
            level: "error",
            from: "Your Organization",
            host: "sending email account host",
            username: "sending email account",
            password: "sending email password",
            secure: true/false, //If true the connection will use TLS when connecting to server. If false (the default) then TLS is used if server supports the STARTTLS extension. In most cases set this value to true if you are connecting to port 465. For port 587 or 25 keep it false
            to: "receiving email account" // Can be multiple. Use comma to split.
            subject: "notification email subject"
        })
    ]
})
```

## Options

Set following options according to the descriptions above. You can also include any winston transport default options.

### Email Options
```
{
    from: string,
    host: string,
    username: string,
    password: string,
    secure?: boolean, // Default false
    to: string,
    subject?: string // Default "Winston Logger Error"
}
```

### Winston Options
```
{
    format?: logform.Format;
    level?: string;
    silent?: boolean;
    handleExceptions?: boolean;

    log?(info: any, next: () => void): any;
    logv?(info: any, next: () => void): any;
    close?(): void;
  }
```