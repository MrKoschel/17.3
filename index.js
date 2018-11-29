process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    // metoda .read() ma za zadanie odczytac co uzytkownik podal na wejsciu
    var input = process.stdin.read();
    console.log("node version is " + process.versions.node + "\n" + "lang is " + process.env.LANG);
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case "/exit":
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }

    }

});
