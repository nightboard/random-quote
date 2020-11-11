let quotes = [
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
    '"The way to get started is to quit talking and begin doing." -Walt Disney',
    '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking." -Steve Jobs',
    '"If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt',
    '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough." -Oprah Winfrey',
    '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success." -James Cameron',
    '"Life is what happens when you\'re busy making other plans." -John Lennon',
    '"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa',
    '"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt',
    '"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead',
    '"It is during our darkest moments that we must focus to see the light." -Aristotle',
    '"Whoever is happy will make others happy too." -Anne Frank',
    '"Life is either a daring adventure or nothing at all." -Helen Keller',
    '"If you really look closely, most overnight successes took a long time." -Steve Jobs',
    '"I find that the harder I work, the more luck I seem to have." -Thomas Jefferson',
    '"The secret of success is to do the common thing uncommonly well." -John D. Rockefeller Jr.',
    '"I failed my way to success." -Thomas Edison'
]

function newQuote() {
    let randomIdx = Math.floor(Math.random() * 20) % quotes.length ;
    document.getElementById('quote-box').innerHTML = quotes[randomIdx];
}