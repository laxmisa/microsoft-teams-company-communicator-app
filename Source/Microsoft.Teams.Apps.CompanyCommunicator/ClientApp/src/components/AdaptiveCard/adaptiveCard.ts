export const getInitAdaptiveCard = () => {
    return (
        {
            "type": "AdaptiveCard",
            "body": [
                {
                    "type": "TextBlock",
                    "weight": "Bolder",
                    "text": "Title",
                    "size": "ExtraLarge",
                    "wrap": true
                },
                {
                    "type": "Image",
                    "spacing": "Default",
                    "url": "",
                    "size": "Stretch",
                    "width": "400px",
                    "altText": ""
                },
                {
                    "type": "TextBlock",
                    "text": "",
                    "wrap": true
                },
                {
                    "type": "TextBlock",
                    "wrap": true,
                    "size": "Small",
                    "weight": "Lighter",
                    "text": ""
                }
            ],
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.0"
        }
    );
}

export const getCardTitle = (card: any) => {
    return card.body[0].text;
}

export const setCardTitle = (card: any, title: string) => {
    card.body[0].text = title;
}

export const getCardImageLink = (card: any) => {
    return card.body[1].url;
}

export const setCardImageLink = (card: any, imageLink?: string) => {
    card.body[1].url = imageLink;
}

export const getCardSummary = (card: any) => {
    return card.body[2].text;
}

export const setCardSummary = (card: any, summary?: string) => {
    card.body[2].text = summary;
}

export const getCardAuthor = (card: any) => {
    return card.body[3].text;
}

export const setCardAuthor = (card: any, author?: string) => {
    card.body[3].text = author;
}

export const getCardBtnTitle = (card: any) => {
    return card.actions[1].title;
}

export const getCardBtnLink = (card: any) => {
    return card.actions[1].url;
}

export const setCardBtn = (card: any, buttonTitle?: string, buttonLink?: string) => {
    if (buttonTitle) {
        card.actions = [
            {
                "type": "Input.ChoiceSet",
                "id": "myChoice",
                "isMultiSelect": false,
                "choices": [
                    {
                        "title": "1",
                        "value": "1"
                    },
                    {
                        "title": "2",
                        "value": "2"
                    },
                    {
                        "title": "3",
                        "value": "3"
                    },
                    {
                        "title": "4",
                        "value": "4"
                    },
                    {
                        "title": "5",
                        "value": "5"
                    }
                ]
            },
            {
                "type": "Action.Submit",
                "title": buttonTitle
            }
        ];
    } else {
        delete card.actions;
    }
}
