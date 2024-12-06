//Create a function that takes a student's score as a parameter.

function gradeCalculation(score)
{
    //Declare and initialize the variable
    let grade;
    switch(true)
    {
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80 && score < 90):
            grade = "B";
            break;
        case (score >= 70 && score < 80):
            grade = "C";
            break;
        default:
            grade = "invalid score";

    }
    //print the result.
    console.log(grade);

}
// Call the function

gradeCalculation(88);
gradeCalculation(92);
gradeCalculation(76);
gradeCalculation();
