type CardItem = {
    id: string,
    title: string,
    mainContent: string,
    buttonText: string | null
}

type CardList = CardItem[]


export const CARDTEXT: CardList = [
    {
        id: 'Overskrift1',
        title: 'Overskrift 1', 
        mainContent: 'Lorem Ipsum',
        buttonText: 'Click me'
    },
    {
        id: 'Overskrift2',
        title: 'Overskrift 2', 
        mainContent: 'Her kommer der en lille tekst',
        buttonText: null
    },
]