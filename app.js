  function VotingAPI(){}

  var baseURL = 'http://83.144.67.188:6666/VotingApiService.svc';

  VotingAPI.Questions = function Questions(){};
  VotingAPI.Answers = function Questions(){};

  VotingAPI.Questions.get = function(votingId, callback) {
    requestURL = baseURL + '/GetQuestions?votingId=' + votingId + '&callback=?';
    $.getJSON(requestURL, callback);
  };

  VotingAPI.Answers.get = function(questionId, callback) {
    requestURL = baseURL + '/GetAnswears?questionId=' + questionId + '&callback=?';
    $.getJSON(requestURL, callback);
  };

  VotingAPI.Answers.submitVote = function(answerId, voterId, sessionId, callback) {
    requestURL = baseURL + '/SubmitVote?answearId=' + answerId + '&voterId=' + voterId + 'sessionId' + sessionId + '&callback=?';
    $.post(requestURL, callback);
  };

  // When question page is displayed
  $(document).on('pagebeforecreate', '#votingPage', function() {
    console.log("Question found: " + theQuestion);
    var question = $.parseJSON(sessionStorage.getItem(0));
    var theQuestion = question.Value;
    var questionId = question.Id;
    $('#question').html(theQuestion);
    VotingAPI.Answers.get(questionId, function(answers) {
          if (typeof answers !== 'undefined' && answers.length > 0) {
            console.log(answers);
            $.each(answers, function(i, item) {
              console.log("found answer " + i + ": " + JSON.stringify(item));
              // $('#answers').append('<a data-role="button" name="answer" href="thank-you.html">' + answers[i].Value + "</a><br/>").click(function(){
                  // VotingAPI.Answers.submitVote(answers[i].Id, 1, 1);
              // })
              // .trigger("create");
              $('#answers').append('<a data-role="button" name="answer" data-value=' + answers[i].Id + ' href="' + baseURL + '/SubmitVote?answearId=' + answers[i].Id + '&voterId=1&sessionId=1">' + answers[i].Value + "</a><br/>").trigger("create");
              sessionStorage.setItem(i, JSON.stringify(item));
            });

          } else {
            alert( "That question ID was not found.  That's unexpected!");
          }
        })
  });

