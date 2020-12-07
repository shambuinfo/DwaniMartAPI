const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO user(email,password,role,firstName,lastName,city,state,zip,emailVerified,
                registrationDate,verificationCode,phone,fax,country,address1,address2,status,
                session,createdOn) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [   data.email,
                data.password,
                data.role,
                data.firstName,
                data.lastName,
                data.city,
                data.state,
                data.zip,
                data.emailVerified,
                data.registrationDate,
                data.verificationCode,
                data.phone,
                data.fax,
                data.country,
                data.address1,
                data.address2,
                data.status,
                data.session,
                data.createdon
            ],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },

    getUsers: callBack => {
        pool.query(
            `select email,password,role,firstname,lastname,city,state,zip,emailVerified,
            registrationDate,verificationCode,phone,fax,country,address1,address2,status,
            session,createdOn from user`,
            [],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },

    getUserByUserId: (id,callBack) => {
        pool.query(
            `select email,password,role,firstname,lastname,city,state,zip,emailVerified,
            registrationDate,verificationCode,phone,fax,country,address1,address2,status,
            session,createdOn from user where id=?`,
            [id],
            (error,results,fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },

       getUserByUserEmail: (email,callBack) => {
        pool.query(
            `select * from user where email = ?`,
            [email],
            (error,results,fields) => {
                if (error) {
                    callBack(error);
                }
                console.log("results from user service file",results);
                return callBack(null, results[0]);
            }

        );
    }


};