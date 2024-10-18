$(function(){
  $('.all-menu').on('click',function(){
    $('#nav-all').addClass('active')
  })
  $('.close').on('click',function(){
    $('#nav-all').removeClass('active')
  })


  $('.lang').on('click',function(){
    $('.lang__list').slideToggle();
  })

  $('.lang__list li').on('click',function(){
    $('.lang__list li').slideToggle()
  })



  $('#gnb').on('mouseenter',function(){
    $('#header').addClass('active');
  })
  $('#gnb').on('mouseleave',function(){
    $('#header').removeClass('active');
  })
})