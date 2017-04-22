var question = 2;

exports.question_get = function (req, res, next) {
    res.render('question',
        {
            id: req.params.id,
            question: 'Wie oft kochen Sie?',
            answers: [
                {
                    id: '01',
                    answer: '3',
                    value: 5
                },
                {
                    id: '02',
                    answer: '5',
                    value: 5.6
                },
                {
                    id: '03',
                    answer: '7',
                    value: 6.3
                },
                {
                    id: '04',
                    answer: '9',
                    value: 6.9
                }
            ]
        });
}

exports.question_post = function (req, res, next) {
    if (!req.session.answers) {
        req.session.answers = [];
    }
    req.session.answers.push({
        question: req.params.id,
        answer: req.body.answer
    });

    if (question < 4) {
        res.redirect('/questions/0' + question++);
    }
    else {
        res.redirect('/questions/result');
    }
}

exports.question_results = function (req, res, next) {
    res.render('result', {answers: req.session.answers});
}