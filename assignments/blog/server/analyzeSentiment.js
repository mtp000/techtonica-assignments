// utils/sentimentAnalysis.js
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

function analyzeSentiment(text) {
    const result = sentiment.analyze(text);
    return {
        score: result.score,  // Overall sentiment score
        comparative: result.comparative, // Normalized sentiment score
    };
}

module.exports = analyzeSentiment;
