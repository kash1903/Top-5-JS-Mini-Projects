const quotes = [
     "Power comes in response to a need, not a desire. -Son Goku",
     "A lesson you must learn, my student: Sometimes, even your teacher makes mistakes.-Kakashi Hatake",
     "Fear is not evil. It tells you what your weakness is. -Glidarts Clive",
     "In our society, letting others find out that you're a nice guy is a very risky move. It's extremely likely that someone would take advantage of that. -Hitagi Senjougahara",
     "The world isn't perfect. But it's there for us, doing the best it can... that's what makes it so damn beautiful.-Roy Mustang",
     "A person grows up when he's able to overcome hardships. Protection is important, but there are some things a person must learn on his own. -Jiraya",
     "A lesson without pain is meaningless. That’s because you can’t gain something without sacrificing something else. -Edward Elric",
     "The world is not beautiful. Therefore, it is. -Kino",
     "Hard work is worthless for those that don’t believe in themselves. -Might Guy",
     "A sword wields no strength unless the hand that holds it has courage.  -Heros Shade"
   
]

const UsedIndex = new Set()

const quoteElement= document.getElementById("quote");

function generateQuote(){

    if(UsedIndex.size >= quotes.length){
        UsedIndex.clear()
    }

    
         

    while(true){

        const randomIndex = Math.floor(Math.random()*quotes.length);

        if(UsedIndex.has(randomIndex)) continue

          const quote = quotes[randomIndex];
           quoteElement.innerHTML=quote;
           UsedIndex.add(randomIndex)
           break
           
    }
    
}

