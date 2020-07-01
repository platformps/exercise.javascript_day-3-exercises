class Person {
    constructor(firstName, lastName, favoriteColors) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColors = favoriteColors;
    }
}




function speak(person, someThingToBeSaid) { // function scope begins here
    return person.firstName + " says '" + someThingToBeSaid + "'.";
} // function scope ends here

function speakOutLoud(person, someThingToBeSaid) {
    console.log(speak(person, someThingToBeSaid));
}

// this method requires 2 arguments, and 1 optional argument with a default value of 10
function speakRepeatedly(person, someThingToBeSaid, numberOfTimeToSay=10) {
    for(let i=0; i<numberOfTimeToSay; i++) {
        speakOutLoud(person, someThingToBeSaid)
    }
}

function defaultSpeakRepeatedly(someThingToBeSaid, numberOfTimeToSay) {
    speakRepeatedly(new Person("leon", "hunter", []), someThingToBeSaid, numberOfTimeToSay);
}




let leon = new Person("leon", "hunter", []);
speakRepeatedly(leon, "This is being said");