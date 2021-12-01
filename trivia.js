
let triviaQuestions = 'https://opentdb.com/api.php?amount=10&category=15'; 

fetch( triviaQuestions )
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }
        else{
            throw Error("Didnt get any questions")
        }
    })
    .then((data)=>{
        console.log(data.results)
        let questions = document.querySelector('.results');
        questions.innerHTML = "";

        for (let i = 0; i< data.results.length; i++){
            questions.innerHTML += `
            <div>
                <h1>Question ${i+1}</h1>
                <h2>${data.results[i].question}</h2>
                <h3>${data.results[i].correct_answer}</h3>
            </div>`
            for(let j = 0; j<data.results[i].incorrect_answers.length; j++){
                questions.innerHTML += `
                <h3>${data.results[i].incorrect_answers[j]}</h3>
                `
            }

        }

    })