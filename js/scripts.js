var grants = '';
var url = 'NEH_Grants2010s.xml';

$(document).ready(function(){
  console.log('document ready');
/*
1) Build an HTML table using an AJAX call on the provided XML file (NEH_Grants2010s.xml).
   The XML data shows all of the grants awarded by the National Endowment for the Humanities since 2008.
2) The table should have four columns:
    The Project Title, Year Awarded, Original Amount, and grant description (ToSupport)
3) You will notice that the table is a bit messy; some of the grants have no descriptions, leaving large
   blank spaces with just 'None.' Clean this up with conditional logic in your code.
   If the grant has no description, do not include it in the table.
*/
  $.ajax({
    type: 'GET',
    data: grants,
    dataType: 'xml',
    url: url,
    async: true,
    success: function(grants) {
      console.log('success function');
      //make column headings
      $("#results").append('<tr><td><b>Project Title</td><td><b>Year Awarded</b></td><td><b>Original Amount</b></td><td><b>Grant Description</b></td></tr>');
      $(grants).find('Grant').each(function(){
        //for each Grant, append ProjectTitle, YearAwarded, OriginalAmount, and ToSupport to table
        var ProjectTitle = $(this).find('ProjectTitle').text();
        var YearAwarded = $(this).find('YearAwarded').text();
        var OriginalAmount = $(this).find('OriginalAmount').text();
        var ToSupport = $(this).find('ToSupport').text();
        //if grant has no description, exclude it from table
        if(ToSupport === 'None') {
          ToSupport = '';
        };
        $('#results').append('<tr><td>' + ProjectTitle + '</td><td>' + YearAwarded + '</td><td>' + OriginalAmount + '</td><td>' + ToSupport + '</td></tr>');
      });
    }//end of success function
  });//end of ajax call
});
