/**
 * 隐藏页面滚动条
 */
function hidePageRoll() {
  $('.page').addClass('hidden')
}
/**
 * 显示页面滚动条
 */
function showPageRoll() {
  $('.page').removeClass('hidden')
}
/**
 * 按ID显示弹窗
 */
function showModal(id) {
  // 显示弹窗
  $('#' + id).addClass('show')
  hidePageRoll()
}

/**
 * 按ID隐藏弹窗
 */
function hideModal(id) {
  $('#' + id).removeClass('show')
  showPageRoll()
}

/**
 * 点击关闭按钮隐藏弹窗
 */
$('.modal-close').on('click', function () {
  $(this).parents('.modal').removeClass('show')
})



;(function() {
  // 显示loading
  showModal('modalLoading')
  setTimeout(function() {
    
    hideModal('modalLoading')
  },3000)
}())