 let messages = [
    {text: "Hello", from: 'Alex'},
    {text: "aha", from: 'Tim'},
    {text: "aloha", from: 'Kira'}
 ];

 let readMessages = new WeakSet();

 readMessages.add(messages[0]);
 //readMessages.add(messages[1]);

 readMessages.add(messages[0]);
messages.shift();
 console.log(readMessages.has(messages[0]))

