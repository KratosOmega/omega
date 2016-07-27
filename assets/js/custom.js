/*
$(document).ready(function(){

});

function divStatusHS(foldID, expandID){
  var domToFold = document.getElementById(foldID);
  var domToExpand = document.getElementById(expandID);

  if(domToExpand.style.display == 'none'){
    domToExpand.style.display = 'block';
  }
}
*/


$(document).ready(function(){
  // ********************************************************************************************************************* initiate the body to behide 
  // 3 main section need to be hide at the beginning
  $("#psvm-body").hide();
  $("#field-body").hide();
  $("#field-constructor").hide();
  $(".method-impl-default-hide").hide();
  
  //
  // --------------------------------------- field section


  // ********************************************************************************************************************* update psvm method call color base on current opened method impl



  // ********************************************************************************************************************* click to show the body
  $(".psvm-expand").click(function(){
    $("#psvm-header").hide();
    $("#psvm-body").show();
  });
  //
  // --------------------------------------- field section
  $(".field-expand").click(function(){
    $("#field-header").hide();
    $("#field-body").show();
  });
  //
  // --------------------------------------- getAboutMe() section
  $(".method-call-getAboutMe-expand").click(function(){
    psvmToMethod();
    $("#method-impl-getAboutMe-body").show();
  });
  //
  $(".method-impl-getAboutMe-sout-expand").click(function(){
    $("#method-impl-getAboutMe-sout-header").hide();
    $("#method-impl-getAboutMe-sout-body").show();
  });
  //
  // --------------------------------------- getExperience() section
  $(".method-call-getExperience-expand").click(function(){
    psvmToMethod();
    $("#method-impl-getExperience-body").show();
  });
  //
  $(".method-impl-getExperience-education-expand").click(function(){
    $("#method-impl-getExperience-education-header").hide();
    $("#method-impl-getExperience-education-body").show();
  });
  //
  $(".method-impl-getExperience-career-expand").click(function(){
    $("#method-impl-getExperience-career-header").hide();
    $("#method-impl-getExperience-career-body").show();
  });
  //
  // --------------------------------------- getSkill() section
  $(".method-call-getSkills-expand").click(function(){
    psvmToMethod();
    $("#method-impl-getSkills-body").show();
  });
  //
  $(".method-impl-getSkills-backEnd-expand").click(function(){
    $("#method-impl-getSkills-backEnd-header").hide();
    $("#method-impl-getSkills-backEnd-body").show();
  });
  //
  $(".method-impl-getSkills-frontEnd-expand").click(function(){
    $("#method-impl-getSkills-frontEnd-header").hide();
    $("#method-impl-getSkills-frontEnd-body").show();
  });
  //
  $(".method-impl-getSkills-development-expand").click(function(){
    $("#method-impl-getSkills-development-header").hide();
    $("#method-impl-getSkills-development-body").show();
  });








  //
  // --------------------------------------- contactMe() section
  $(".method-call-contactMe-expand").click(function(){
    psvmToMethod();
    $("#method-impl-contactMe-body").show();
  });
  //
  $(".method-impl-contactMe-myInfo-expand").click(function(){
    $("#method-impl-contactMe-myInfo-header").hide();
    $("#method-impl-contactMe-myInfo-body").show();
  });

  //
  $(".method-impl-contactMe-contactForm-expand").click(function(){
    $("#method-impl-contactMe-contactForm-header").hide();
    $("#method-impl-contactMe-contactForm-body").show();
  });








  // ********************************************************************************************************************* click to hide the body
  $(".psvm-fold").click(function(){
    $("#psvm-body").hide();
    $("#psvm-header").show();
    // Add more folding here, whenever close the psvm, folder everything inside
  });
  //
  // --------------------------------------- field section
  $(".field-fold").click(function(){
    $("#field-body").hide();
    $("#field-header").show();
  });
  //
  // --------------------------------------- getAboutMe() section
  $(".method-impl-getAboutMe-fold").click(function(){
    methodToPSVM();
  });
  //
  $(".method-impl-getAboutMe-sout-fold").click(function(){
    $("#method-impl-getAboutMe-sout-body").hide();
    $("#method-impl-getAboutMe-sout-header").show();
  });
  //
  // --------------------------------------- getExperience() section
  $(".method-impl-getExperience-fold").click(function(){
    methodToPSVM();
  });
  //
  $(".method-impl-getExperience-education-fold").click(function(){
    $("#method-impl-getExperience-education-body").hide();
    $("#method-impl-getExperience-education-header").show();
  });
  //
  $(".method-impl-getExperience-career-fold").click(function(){
    $("#method-impl-getExperience-career-body").hide();
    $("#method-impl-getExperience-career-header").show();
  });
  //
  // --------------------------------------- getSkill() section
  $(".method-impl-getSkills-fold").click(function(){
    methodToPSVM();
  });
  //
  $(".method-impl-getSkills-backEnd-fold").click(function(){
    $("#method-impl-getSkills-backEnd-body").hide();
    $("#method-impl-getSkills-backEnd-header").show();
  });
  //
  $(".method-impl-getSkills-frontEnd-fold").click(function(){
    $("#method-impl-getSkills-frontEnd-body").hide();
    $("#method-impl-getSkills-frontEnd-header").show();
  });
  //
  $(".method-impl-getSkills-development-fold").click(function(){
    $("#method-impl-getSkills-development-body").hide();
    $("#method-impl-getSkills-development-header").show();
  });









  //
  // --------------------------------------- contactMe() section
  $(".method-impl-contactMe-fold").click(function(){
    methodToPSVM();
  });
  //
  $(".method-impl-contactMe-myInfo-fold").click(function(){
    $("#method-impl-contactMe-myInfo-body").hide();
    $("#method-impl-contactMe-myInfo-header").show();
  });
  //
  $(".method-impl-contactMe-contactForm-fold").click(function(){
    $("#method-impl-contactMe-contactForm-body").hide();
    $("#method-impl-contactMe-contactForm-header").show();
  });
  








  // ********************************************************************************************************************* load the skills percentage bars
  // back-end skill bar
  percentageBar("backEndSkills", 80, 20);
  percentageBar("java", 80, 20);
  percentageBar("springMvcFramework", 70, 20);
  percentageBar("maven", 65, 20);
  percentageBar("java8Lambda", 60, 20);
  percentageBar("junit", 70, 20);

  // front-end skill bar
  percentageBar("frontEndSkills", 70, 20);
  percentageBar("html5", 70, 20);
  percentageBar("css", 60, 20);
  percentageBar("bootstrap", 60, 20);
  percentageBar("javaScript", 75, 20);
  percentageBar("jQuery", 65, 20);
  percentageBar("ajax", 65, 20);

  // development skill bar
  percentageBar("developmentSkills", 70, 20);
  percentageBar("git", 80, 20);
  percentageBar("sdlc", 80, 20);
  percentageBar("jira", 80, 20);
  percentageBar("agileLifecycle", 60, 20);







});


/* Generate Percentage Bar */
function percentageBar(skillName, percentage, scale){
  var skillBarIdSelector = "#"+skillName + "-bar";
  var progressBlock = percentage / 100 * scale;
  var remainingBlock = scale - progressBlock;
  var bar = "[";

  for (var i = 0; i <= progressBlock; i++) {
    bar += "=";
  };

  for (var i = 0; i <= remainingBlock; i++) {
    bar += "&nbsp;";
  };

  bar += ("] " + percentage + "%");

  $(skillBarIdSelector).append(bar);
}

/* call to show psvm body, fold all others */
function methodToPSVM(){
  // re-initialize the default hide & show status
  $(".method-impl-default-hide").hide();
  $(".method-impl-default-show").show();
  // 
  $("#psvm-header").hide();
  $("#psvm-body").show();
}

function psvmToMethod(){
  // re-initialize the default hide & show status
  $(".method-impl-default-hide").hide();
  $(".method-impl-default-show").show();
  //
  $("#psvm-body").hide();
  $("#psvm-header").show();
  $("#method-impl").show();
}

// pass in the method name, if current impl method is show
// then change call method's color to indicate it's active status
// input format -> method() ==> method
// id format -> method-impl-getSkills-id
// id format -> method-call-getSkills-id
// ??? (Under Development)
function updateMethodCallFont(methodName){
  var impl_id = "#method-impl-" + methodName + "-id";
  var call_id = "#method-call-" + methodName + "-id";
  if(!$(impl_id).is(":block")){
    $(call_id).css("color", "yellow");
  }
}







