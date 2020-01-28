!function (e, t, a) { 
  var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '  <i class="fa fa-copy" aria-hidden="true"></i><span>copy</span>';
    copyHtml += '</button>';
    $(".highlight .code pre").before(copyHtml);
    var clipboard = new ClipboardJS('.btn-copy', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });
    // clipboard.on('success', e => {
    //     e.trigger.setAttribute('aria-label', 'Copied!');
    //     e.clearSelection();
    // });
  }
  initCopyCode();
}(window, document);