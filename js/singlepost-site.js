$(document).ready(function(){
    $('.read-more').click(function(){
       $('article.comments:gt(0)').slideToggle("slow", function(){
           var visible = $("article.comments:gt(0)").is(":visible");
           $(".read-more").text(visible? " Read Less":" Read More");
           $(".read-more").removeClass(visible? 'glyphicon-arrow-down': 'glyphicon-arrow-up');
           $(".read-more").addClass(visible? 'glyphicon-arrow-up' : 'glyphicon-arrow-down');
       });
    });
});