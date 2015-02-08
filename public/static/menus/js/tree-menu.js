function dynamicTreeMenu(sel, opts){
    // Turns a tree menu into a dynamic one, without page reloads until a
    // leaf node or item is chosen.
    
    defaults = {
        target: null
    };
    
    $.extend(defaults, opts);
    
    $menu = $(sel);
    
    function toggleSelfAndHideSiblings(evt){
        $(this).closest('li').toggleClass('closed');
        // $(this).preventDefault();
        $(this).closest('li').siblings('li').addClass('closed');
        return false;
    }
    
    function loadItem(evt){
        // Eventually ajaxy load the data and put it in the target
        // $.get($(this).href, $(defaults.target));
        
        return true;
    }
    
    
    // Attach handlers
    $('li.menu > a', $menu).click(toggleSelfAndHideSiblings);
    $('ul.items > li > a', $menu).click(loadItem);
}

$(function(){
    dynamicTreeMenu('.tree-menu');
    // TODO: Don't use hardcoded path name
    $('head').append('<link rel="stylesheet" href="/media/menus/style/tree-menu.css">')
});