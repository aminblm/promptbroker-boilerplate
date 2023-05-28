

let chats  = [
    {   "id": 1,
        "user": "@promptbroker",
        "last_message": "test message ",
        "timestamp": "1 minute ago",
        "image": "https://firebasestorage.googleapis.com/v0/b/promptbase.appspot.com/o/DALLE_IMAGES%2Fic5ASefHHEUQNeovrEKj0NqK5343%2Fresized%2F1680855838510_100x100.webp?alt=media&token=29379ebf-839f-4b1c-8371-e6fd0fdfd568"
    },
    {   "id": 2,
        "user": "@hadgood",
        "last_message": "much longer test message",
        "timestamp": "just now",
        "image": "https://firebasestorage.googleapis.com/v0/b/promptbase.appspot.com/o/DALLE_IMAGES%2FSUUXdtiIyIc8XKWDYL9noDx3GG73%2Fresized%2F1679531684727_100x100.webp?alt=media&token=b7478fe8-40ae-454f-b777-c79aa425fcb3"
    },
    {   "id": 3,
        "user": "@7cloud",
        "last_message": "test lorem ipsum dolor sit amet",
        "timestamp": "3 minutes ago",
        "image": "https://firebasestorage.googleapis.com/v0/b/promptbase.appspot.com/o/DALLE_IMAGES%2FSUUXdtiIyIc8XKWDYL9noDx3GG73%2Fresized%2F1679531684727_100x100.webp?alt=media&token=b7478fe8-40ae-454f-b777-c79aa425fcb3"
    },  
]

let messages = [
    {
        "chat1": [
            {   "id": 1,
                "received": {
                    "user":"@hadgood",
                    "message": "hi"
                },
                "sent": {
                    "user":"@promptbroker",
                    "message": "hello"
                }
            },
            {   id: 2,
                "received": {
                    "user":"@hadgood",
                    "message": "hi"
                },
                "sent": {
                    "user":"@promptbroker",
                    "message": "hello"
                }
            }
        ]
    }
]


export default chats