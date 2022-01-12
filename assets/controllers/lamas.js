
import $ from 'jquery';

var $mainContainer = $("#lama")

/* set back ground for lama */
var $bgLama = $("div.lama-bg:first", $mainContainer);
$bgLama.css("background-image", 'url("'+ $bgLama.data('bg') +'")');

/* l'action lors du click sur une partie de lama skinnable */

var onSkinPartClick = function (target, event) {
    var $this = $(this);
    var partName = $this.data('lama-part');

};

var skinPartSetBg = function ($element, partName, currentSkinPart) {
    if (currentSkinPart == 0 
     || typeof lamaParts == "undefined"
     || typeof lamaParts[partName] == "undefined"
     || typeof lamaParts[partName]["elements"][currentSkinPart - 1] == "undefined")
    {
        $element.css("background-image", 'none');
        return 0;
    }
    $element.css("background-image", 'url("'+ lamaParts[partName]["elements"][currentSkinPart - 1] +'")');
    return currentSkinPart;
}
var onSkinPartClick = function () {
    var $this = $(this);
    var partName = $this.data('lama-part');
    lamaParts[partName]["index"] = skinPartSetBg($this, partName, lamaParts[partName]["index"] + 1);
}

/* parcours des parties de lama à ajouter */
$("div.part", $mainContainer).each( function (event) {
    var $this = $(this);
    var partName = $this.data('lama-part');
    if (typeof lamaParts == "undefined" || typeof lamaParts[partName] == "undefined") {
        return;
    }
    var currentSkinPart = lamaParts[partName]["currentIndex"] = 0;
    // le nombre d'image possible (index: donc nbr-1)
    lamaParts[partName]["maxIndex"] = lamaParts[partName]["elements"].length - 1;

    // ajout de la classe qui gere le positionnement
    $this.addClass("lama-part-" + partName);

    // mise en place du background initial
    lamaParts[partName]["index"] = skinPartSetBg($this, partName, currentSkinPart);

    $this.on("click", onSkinPartClick);

});

/*
$(">div", $mainContainer).each( function (event) {
    var $this = $(this);
    var imgSrc = $this.data('bg');
    if (imgSrc.indexOf('.')) {
        $this.css("background-image", 'url("'+ imgSrc +'")');
    }
});
*/