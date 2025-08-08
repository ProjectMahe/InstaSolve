function solve() {
  const query = document.getElementById("query").value.toLowerCase();
  let answer = "Sorry, I don't have a solution yet.";
  
  if(query.includes("study"))
    answer = "Try the Pomodoro technique: 25 minutes focus, 5 minutes break.";
  else if(query.includes("stress"))
    answer = "Take a 5-minute breathing exercise: inhale 4s, hold 4s, exhale 4s.";
  else if(query.includes("climate"))
    answer = "Reduce single-use plastic and bike instead of driving.";
  else
    answer = "Break your problem into smaller steps and solve one at a time.";
  
  document.getElementById("output").innerHTML = answer;
}
