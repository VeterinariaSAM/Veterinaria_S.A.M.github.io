function ver() {
    db.collection("usuarios").get().then((querySnapshot) => {
        let namesList = "";
        let lastNamesList = "";

        querySnapshot.forEach((doc) => {
            // Concatenar nombres y apellidos en las cadenas
            namesList += `${doc.data().nombre}<br>`;
            lastNamesList += `${doc.data().apellidos}<br>`;
        });

        // Invertir el orden de las cadenas
        namesList = namesList.split("<br>").filter(Boolean).reverse().join("<br>");
        lastNamesList = lastNamesList.split("<br>").filter(Boolean).reverse().join("<br>");

        // Asignar las cadenas invertidas a los elementos HTML
        document.getElementById("print_name").innerHTML = namesList;
        document.getElementById("print_last").innerHTML = lastNamesList;
    });
}
