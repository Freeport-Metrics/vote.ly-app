  function VotingAPI(){}

  VotingAPI.Questions = function Votings(){}

  VotingAPI.Questions.get = function(userId, callback) {
    requestURL = 'http://83.144.67.188:6666/VotingApiService.svc/GetVotings?userId=' + userId + '&callback=?';
    $.getJSON(requestURL, callback);
  }
