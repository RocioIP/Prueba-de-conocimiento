'use strict';

async function usuarios(numero = '') {
    try {
        const response = await fetch(
            `https://randomuser.me/api/?results=${numero}`
        );
        const { results } = await response.json();

        for (const user of results) {
            const username = user.login.username;
            const nameUser = user.name.first;
            const surnameUser = user.name.last;
            const sexUser = user.gender;
            const countryuser = user.location.country;
            const emailUser = user.email;
            const pictureUser = user.picture.large;
            const myArray = [
                username,
                nameUser,
                surnameUser,
                sexUser,
                countryuser,
                emailUser,
                pictureUser,
            ];
            console.log(myArray);
        }
    } catch (error) {
        console.log(error);
    }
}

usuarios('5');
