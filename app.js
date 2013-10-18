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

