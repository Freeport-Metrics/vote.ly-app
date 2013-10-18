  function VotingAPI(){}

  var baseURL = 'http://83.144.67.188:6666/VotingApiService.svc';

  VotingAPI.Questions = function Questions(){}
  VotingAPI.Answers = function Questions(){}

  VotingAPI.Questions.get = function(votingId, callback) {
    requestURL = baseURL + '/GetQuestions?votingId=' + votingId + '&callback=?';
    $.getJSON(requestURL, callback);
  };

  VotingAPI.Answers.get = function(questionId, callback) {
    requestURL = baseURL + '/GetAnswears?questionId=' + questionId + '&callback=?';
    $.getJSON(requestURL, callback);
  };

  $(document).on('pageshow', '#votingPage', function() {
    console.log("Question found: " + theQuestion);
    var question = $.parseJSON(sessionStorage.getItem(0));
    var theQuestion = question.Value;
    $('#votingPage #question').html(theQuestion);
  });
