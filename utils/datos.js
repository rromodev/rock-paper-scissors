export default {
    "juegos": [ 
        { 
            "id": 1,
            "nombre": "Rock Paper Scissors",
            "opciones": ["Rock", "Paper", "Scissors"],
            "reglas": [
                { "valor" : "Rock",
                    "gana" : [ "Scissors" ] },
                { "valor" : "Scissors",
                    "gana" : [ "Paper" ] },
                { "valor" : "Paper",
                    "gana" : [ "Rock" ] }
            ]
        },
        { 
            "id": 2,
            "nombre": "Rock Paper Scissors Lizard Spock",
            "opciones": ["Rock", "Paper", "Scissors", "Lizard", "Spock"],
            "reglas": [
                { "valor" : "Rock",
                    "gana" : [ "Scissors", "Lizard" ] },
                { "valor" : "Scissors",
                    "gana" : [ "Paper", "Lizard" ] },
                { "valor" : "Paper",
                    "gana" : [ "Rock", "Spock" ] },
                { "valor" : "Lizard",
                    "gana" : [ "Spock", "Paper" ] },
                { "valor" : "Spock",
                    "gana" : [ "Scissors", "Rock" ] }
            ]
        }        
    ],
    "valores": [
        "Rock",
        "Paper",
        "Scissors",
        "Lizard",
        "Spock"
    ]
}